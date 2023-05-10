import { Box, Heading, Flex, Input } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";
import { useEffect, useState } from "react";

interface FilterProps {
  titleFilter: string;
  min: string;
  max: string;
  setMin: React.Dispatch<React.SetStateAction<string>>;
  setMax: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterWithInputComponent = ({
  titleFilter,
  min,
  max,
  setMin,
  setMax,
}: FilterProps) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const [formatType, setFormatType] = useState(titleFilter === "Preço");

  useEffect(() => {
    setMinValue(min);
    setMaxValue(max);
  }, [min, max]);

  const formatFilter = (value: string, isCurrency: boolean) => {
    let result = "";
    const convertedValue = +value;
    if (!convertedValue) return value;

    if (isCurrency) {
      result = convertedValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      return result;
    }

    result = convertedValue.toLocaleString();
    return result;
  };

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinValue(event.target.value.replace(/[^\d]/g, ""));
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxValue(event.target.value.replace(/[^\d]/g, ""));
  };

  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = formatFilter(e.target.value, formatType);
    setMin(e.target.value);
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = formatFilter(e.target.value, formatType);
    setMax(e.target.value);
  };

  return (
    <Box>
      <Heading fontSize="28px" fontWeight="600">
        {titleFilter}
      </Heading>

      <Flex gap="20px" marginTop="18px">
        <Input
          maxW="142px"
          p={"0 5px"}
          fontSize={"14px"}
          fontWeight={800}
          bg={Colors.grey4}
          borderRadius="0"
          placeholder="Mínimo"
          _placeholder={{
            color: Colors.grey2,
          }}
          type="text"
          onBlur={handleMin}
          onChange={handleMinChange}
          onDoubleClick={() => setMinValue("")}
          value={minValue}
        />

        <Input
          maxW="142px"
          p={"0 5px"}
          fontSize={"14px"}
          fontWeight={800}
          bg={Colors.grey4}
          borderRadius="0"
          placeholder="Máximo"
          _placeholder={{
            color: Colors.grey2,
          }}
          type="text"
          onBlur={handleMax}
          onChange={handleMaxChange}
          onDoubleClick={() => setMaxValue("")}
          value={maxValue}
        />
      </Flex>
    </Box>
  );
};
