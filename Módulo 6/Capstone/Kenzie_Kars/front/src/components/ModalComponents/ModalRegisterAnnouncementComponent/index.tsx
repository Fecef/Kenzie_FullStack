import {
  Flex,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  FormControl,
  Input,
  Box,
  Textarea,
  UseModalProps,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState, useContext, useEffect } from "react";

import {
  ButtonBrand1,
  ButtonBrand4,
  ButtonGray6,
} from "../../ButtomComponents";
import { TextB2, TextH7 } from "../../TextComponents";
import { AnnouncementContext } from "../../../contexts/announcementContext";
import { announcementDataNormalizer } from "../../../utils/announcementDataNormalizer";
import { FipeContext } from "../../../contexts/fipeContext";
import { IFipeModel } from "../../../interfaces/fipe.interface";
import { stringFormater } from "../../../utils/stringFormater";
import { labelCSS, inputCSS } from "../../../styles/global";
import { Colors } from "../../../styles/colors";

export const ModalRegisterAnnoucement = ({
  isOpen,
  onClose,
}: UseModalProps) => {
  const { announcementRegister } = useContext(AnnouncementContext);
  const { getAllBrands, getAllModelsByBrand } = useContext(FipeContext);

  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<IFipeModel[]>([]);
  const [carDetail, setCarDetail] = useState<IFipeModel>({} as IFipeModel);
  const [image, setImage] = useState<number[]>([]);
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");

  const { register, handleSubmit } = useForm();

  async function onSubmit(data: any) {
    const numberOnly = /[^\d,]/g;

    data.mileage = +data.mileage;
    data.year = +data.year;
    data.price = parseFloat(
      data.price.replace(numberOnly, "").replace(",", ".")
    );
    data.priceFipe = parseFloat(
      data.priceFipe.replace(numberOnly, "").replace(",", ".")
    );

    const normalizedData = announcementDataNormalizer(data);

    announcementRegister(normalizedData);
    onClose();
  }

  async function getModels(value: string) {
    const res = await getAllModelsByBrand(value);
    setModels(res);
  }

  async function getCarDetails(value: string) {
    const car = models.filter((model) => model.name === value);
    setCarDetail(car[0]);
  }

  useEffect(() => {
    (async () => {
      const res = await getAllBrands();
      const brands = Object.keys(res);
      setBrands(brands);
    })();
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent mt="100px" as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>
            <TextH7
              fontWeight={800}
              fontFamily={"Lenxend"}
              color={Colors.brand1}
            >
              Criar anúncio
            </TextH7>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody display="flex" flexDirection="column" gap="20px">
            <TextB2 fontWeight={500}>Informações do veículo</TextB2>

            <FormControl isRequired>
              <Flex direction="column" gap="15px">
                <Box>
                  <FormLabel css={labelCSS}>Marca</FormLabel>
                  <Select
                    css={inputCSS}
                    color={Colors.brand1}
                    focusBorderColor={Colors.brand1}
                    {...register("brand", {
                      onChange: (e) => {
                        getModels(e.target.value);
                      },
                    })}
                  >
                    <option>selecione</option>
                    {brands.map((brand, i) => (
                      <option key={i} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </Select>
                </Box>

                <Box flexDir="column" gap="1px">
                  <FormLabel css={labelCSS}>Modelo</FormLabel>
                  <Select
                    css={inputCSS}
                    color={Colors.brand1}
                    focusBorderColor={Colors.brand1}
                    isDisabled={models.length ? false : true}
                    {...register("model", {
                      onChange: (e) => getCarDetails(e.target.value),
                    })}
                  >
                    {models.map((model, i) => (
                      <option key={i} value={model.name}>
                        {model.name}
                      </option>
                    ))}
                  </Select>
                </Box>
              </Flex>
            </FormControl>

            {carDetail.id && (
              <>
                <Flex gap="15px">
                  <Flex flexDir="column" gap="1px">
                    <FormLabel css={labelCSS}>Ano</FormLabel>
                    <Input
                      readOnly
                      css={inputCSS}
                      color={Colors.brand1}
                      focusBorderColor={Colors.brand1}
                      value={carDetail.year}
                      {...register("year")}
                    />
                  </Flex>

                  <Flex flexDir="column" gap="1px">
                    <FormLabel css={labelCSS}>Combustível</FormLabel>
                    <Input
                      readOnly
                      css={inputCSS}
                      color={Colors.brand1}
                      focusBorderColor={Colors.brand1}
                      value={(() => {
                        switch (carDetail.fuel) {
                          case 1:
                            return "Flex";
                          case 2:
                            return "Híbrido";
                          case 3:
                            return "Elétrico";
                        }
                      })()}
                      {...register("fuelType")}
                    />
                  </Flex>
                </Flex>

                <Flex gap="15px">
                  <Flex flexDir="column" gap="1px">
                    <FormLabel css={labelCSS}>Preço FIPE</FormLabel>
                    <Input
                      readOnly
                      css={inputCSS}
                      color={Colors.brand1}
                      focusBorderColor={Colors.brand1}
                      value={carDetail.value.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                      {...register("priceFipe")}
                    />
                  </Flex>

                  <FormControl isRequired>
                    <FormLabel css={labelCSS}>Preço</FormLabel>
                    <Input
                      css={inputCSS}
                      value={price}
                      color={Colors.brand1}
                      focusBorderColor={Colors.brand1}
                      {...register("price", {
                        onChange: (e) =>
                          setPrice(e.target.value.replace(/[^\d]/g, "")),
                        onBlur: (e) =>
                          stringFormater(e.target.value, true, setPrice),
                      })}
                    />
                  </FormControl>
                </Flex>

                <FormControl isRequired>
                  <Flex gap="15px">
                    <Flex flexDir="column" gap="1px">
                      <FormLabel css={labelCSS}>Quilometragem</FormLabel>
                      <Input
                        css={inputCSS}
                        value={mileage}
                        color={Colors.brand1}
                        focusBorderColor={Colors.brand1}
                        {...register("mileage", {
                          onChange: (e) =>
                            setMileage(e.target.value.replace(/[^\d]/g, "")),
                          onBlur: (e) =>
                            stringFormater(e.target.value, false, setMileage),
                        })}
                      />
                    </Flex>

                    <Flex flexDir="column" gap="1px">
                      <FormLabel css={labelCSS}>Cor</FormLabel>
                      <Input
                        css={inputCSS}
                        color={Colors.brand1}
                        focusBorderColor={Colors.brand1}
                        {...register("color")}
                      />
                    </Flex>
                  </Flex>
                </FormControl>

                <FormControl isRequired>
                  <Box>
                    <FormLabel css={labelCSS}>Descrição</FormLabel>
                    <Textarea
                      css={inputCSS}
                      resize="none"
                      color={Colors.brand1}
                      focusBorderColor={Colors.brand1}
                      {...register("description")}
                    />
                  </Box>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel css={labelCSS}>Imagem de capa (URL) </FormLabel>
                  <Input
                    css={inputCSS}
                    placeholder="Ex: http://www.imagestock.com"
                    autoComplete="off"
                    color={Colors.brand1}
                    focusBorderColor={Colors.brand1}
                    {...register("banner")}
                  />
                </FormControl>

                {image.map((_, i) => {
                  if (i >= 6) return null;

                  return (
                    <Box key={i}>
                      <FormLabel>{`${i + 1}º Imagem da galeria`}</FormLabel>
                      <Input
                        css={inputCSS}
                        placeholder="Ex: http://www.imagestock.com"
                        autoComplete="off"
                        color={Colors.brand1}
                        focusBorderColor={Colors.brand1}
                        {...register(`image${i + 1}`)}
                      />
                    </Box>
                  );
                })}

                <ButtonBrand4
                  alignSelf="flex-start"
                  fontSize="14px"
                  onClick={() => setImage((prevImages) => [...prevImages, 1])}
                >
                  Adicionar imagem
                </ButtonBrand4>
              </>
            )}
          </ModalBody>

          <ModalFooter gap="10px">
            <ButtonGray6 onClick={onClose}>Cancelar</ButtonGray6>

            <ButtonBrand1 isDisabled={false} type="submit">
              Criar anúncio
            </ButtonBrand1>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
