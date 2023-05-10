import { Box, Button, Flex } from "@chakra-ui/react";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CardComponent } from "../../components/CardComponent";
import { AnnouncementContext } from "../../contexts/announcementContext";
import { IAnnouncement } from "../../interfaces/announcement.interface";
import { SearchNotFound } from "../SearchNotFound";
import { StyledReactPaginate } from "./style";
import { Colors } from "../../styles/colors";

interface IListCardComponent {
  centered?: boolean;
  filterActive: boolean;
  hideTag: boolean;
}

export const ListCardComponent = ({
  filterActive,
  hideTag,
  centered,
}: IListCardComponent) => {
  const { id } = useParams();
  const { announcements } = useContext(AnnouncementContext);
  const [filteredData, setFilteredData] = useState<IAnnouncement[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const announcementsPerPage = 16;

  useEffect(() => {
    let data = announcements;
    if (id) {
      data = announcements.filter((el) => el.user?.id === id);
    }
    setFilteredData(data);
    setPageNumber(0);
  }, [id, announcements]);

  const pagesVisited = pageNumber * announcementsPerPage;
  const pageCount = Math.ceil(filteredData.length / announcementsPerPage);

  const handlePageChange = (selected: number) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Box>
        <Flex wrap={{ sm: "nowrap", md: "wrap" }} overflowX="auto" gap="25px">
          {!!filteredData.length ? (
            filteredData
              .slice(pagesVisited, pagesVisited + announcementsPerPage)
              .map((announce: IAnnouncement) => (
                <CardComponent
                  announce={announce}
                  hideTag={hideTag}
                  key={announce.id}
                />
              ))
          ) : (
            <SearchNotFound />
          )}
        </Flex>
      </Box>

      {filteredData.length > announcementsPerPage && (
        <Flex justifyContent="center">
          <StyledReactPaginate
            previousLabel={
              pagesVisited > 0 && (
                <Button
                  marginRight={50}
                  bgColor="transparent"
                  fontWeight={600}
                  color={Colors.brand1}
                  fontSize={18}
                  size="sm"
                >
                  &lt; Anterior
                </Button>
              )
            }
            nextLabel={
              pageNumber !== pageCount - 1 ? (
                <Button
                  marginLeft={50}
                  bgColor={"transparent"}
                  fontWeight={600}
                  color={Colors.brand1}
                  fontSize={18}
                  size="sm"
                >
                  Seguinte &gt;
                </Button>
              ) : null
            }
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={4}
            onPageChange={({ selected }) => handlePageChange(selected)}
            containerClassName={"pagination-container"}
            pageClassName={"pagination-page"}
            pageLinkClassName={"pagination-link"}
            activeLinkClassName="pagination-active"
          />
        </Flex>
      )}
    </>
  );
};
