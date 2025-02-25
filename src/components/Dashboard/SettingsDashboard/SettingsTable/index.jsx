import { useEffect, useState } from "react";
import DeleteIcon from "../../../Icon/DeleteIcon";
import EditIcon from "../../../Icon/EditIcon";
// import MoreVertIcon from "../../Icon/MoreVertIcon";
import SortDown from "../../../Icon/SortDown";
import MyPagination from "../../../Pagination";
import styles from "./index.module.scss";
// import { members } from "../../../data/team_members";
import SearchIcon from "../../../Icon/SearchIcon";
import MarkIcon from "../../../Icon/Mark";
import CloseIcon from "../../../Icon/CloseIcon";
import axios from "axios";

const SettingsTable = ({
  setActiveUser,
  setActiveModal,
  members,
  searchValue,
  setSearchValue,
}) => {
  const [data, setData] = useState(null);
  const [activeSearch, setActiveSearch] = useState(false);

  const [isHovered, setIsHovered] = useState(null);

  useEffect(() => {
    setData([...(members?.admins ?? []), ...(members?.operators ?? [])]);
  }, [members]);

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th className={styles.th_search}>
                <div>
                  <div
                    className={styles.search_icon}
                    onClick={() => {
                      setActiveSearch(!activeSearch);
                      setSearchValue("");
                    }}
                  >
                    <SearchIcon color={activeSearch ? "#3D73FF" : "#99A09B"} />
                  </div>
                  <div className={styles.form}>
                    {activeSearch ? (
                      <div>
                        <input
                          type="text"
                          placeholder="Search..."
                          value={searchValue}
                          onChange={(e) => {
                            setSearchValue(e.target.value);
                          }}
                        />
                      </div>
                    ) : (
                      <p>Member name</p>
                    )}
                  </div>
                </div>
                <div>
                  {activeSearch ? (
                    <div
                      onClick={() => {
                        setActiveSearch(!activeSearch);
                        setSearchValue("");
                      }}
                    >
                      <CloseIcon color="#99A09B" />
                    </div>
                  ) : (
                    <div
                      onClick={() =>
                        setData((prev) =>
                          [...prev].sort((a, b) => a.email - b.email)
                        )
                      }
                    >
                      <SortDown />
                    </div>
                  )}
                </div>
              </th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((dt, index) => {
                return (
                  <tr
                    key={index}
                    className={styles.tbody}
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <td className={styles.first}>
                      <p>{dt?.email}</p>
                    </td>
                    <td>
                      <div className={styles.role}>
                        <div>
                          <MarkIcon
                            color={
                              dt?.role.toLowerCase() === "admin"
                                ? "#3D73FF"
                                : "#99A09B"
                            }
                          />
                        </div>
                        <p>{dt?.role}</p>
                      </div>
                    </td>
                    <td className={styles.actions}>
                      <div
                        onClick={() => {
                          setActiveUser(dt);
                          setActiveModal("edit");
                        }}
                      >
                        <EditIcon
                          color={isHovered === index ? " #3d73ff" : "#99A09B"}
                        />
                      </div>
                      <div
                        onClick={() => {
                          setActiveUser(dt);
                          setActiveModal("delete");
                        }}
                      >
                        <DeleteIcon
                          color={isHovered === index ? "#FF3D3D" : "#99A09B"}
                        />
                      </div>

                      {/* <MoreVertIcon /> */}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {/* <div>
        <MyPagination data={data} setData={setData} />
      </div> */}
    </div>
  );
};

export default SettingsTable;
