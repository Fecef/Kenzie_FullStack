import { List, ListItem } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";
import { FontSizes } from "../../styles/fontSizes";

interface FilterProps {
  titleFilter: string;
  filters: string[] | number[];
  setSelected: any;
}

export const FilterComponent = ({
  titleFilter,
  filters,
  setSelected,
}: FilterProps) => {
  return (
    <List fontFamily={"Lexend"}>
      <ListItem fontSize={FontSizes.heading6} fontWeight="600">
        {titleFilter}
      </ListItem>

      {filters.map((filter) => (
        <ListItem
          key={filter}
          cursor="pointer"
          fontSize={FontSizes.heading7}
          fontWeight="800"
          color={Colors.grey3}
          marginStart="15px"
          onClick={(e) => {
            const element = e.target as HTMLElement;
            setSelected(element.textContent);
          }}
        >
          {filter}
        </ListItem>
      ))}
    </List>
  );
};
