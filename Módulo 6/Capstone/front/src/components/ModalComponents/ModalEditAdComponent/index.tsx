import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  Box,
  FormLabel,
  Select,
  Input,
  Textarea,
  UseModalProps,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState, useContext, useEffect } from "react";
import {
  ButtonGray6,
  ButtonGray5,
  ButtonBrand1,
  ButtonGray10,
  ButtonBrand4,
} from "../../ButtomComponents";
import { TextB2, TextH7 } from "../../TextComponents";
import { AnnouncementContext } from "../../../contexts/announcementContext";
import { FipeContext } from "../../../contexts/fipeContext";
import { InputFormComponent } from "../../InputFormComponent/InputFormRegisterUserComponent";
import { Colors } from "../../../styles/colors";
import { inputCSS, labelCSS } from "../../../styles/global";
import { IFipeModel } from "../../../interfaces/fipe.interface";
import { updateUserAddressSchema } from "../../../schemas/user.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../../contexts/userContext";
import { IImage } from "../../../interfaces/image.interface";
import { updateAnnouncementSchema } from "../../../schemas/announcement.schema";

export const ModalEditAd = ({ isOpen, onClose }: UseModalProps) => {
  const { announcementUpdate, handleClick } = useContext(AnnouncementContext);
  const { user } = useContext(UserContext);
  const { getAllBrands, getAllModelsByBrand } = useContext(FipeContext);
  const [carDetail, setCarDetail] = useState<IFipeModel>({} as IFipeModel);
  const [models, setModels] = useState<IFipeModel[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [showInput, setShowInput] = useState(false);
  const [image, setImage] = useState<number[]>([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formValues, setFormValues] = useState({
    brand: "",
    model: "",
    year: "",
    fuelType: "",
    mileage: "",
    color: "",
    priceFipe: "",
    price: "",
    images: "",
    banner: "",
    description: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(updateAnnouncementSchema),
  });

  const descriptionValue = watch("description");

  const handlerForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const updatedFields: {
      brand?: string;
      banner?: string;
      color?: string;
      description?: string;
      fuelType?: string;
      mileage?: any;
      model?: string;
      price?: any;
      priceFipe?: any;
      year?: any;
      images?: IImage[] | any;
      [key: string]: any;
    } = {};

    if (user) {
      if (formValues.brand !== "") {
        updatedFields.brand = formValues.brand;
      }

      if (formValues.banner !== "") {
        updatedFields.banner = formValues.banner;
      }

      if (formValues.color !== "") {
        updatedFields.color = formValues.color;
      }

      if (formValues.description !== "") {
        updatedFields.description = formValues.description;
      }

      if (formValues.fuelType !== "") {
        updatedFields.fuelType = formValues.fuelType;
      }

      if (formValues.mileage !== "") {
        updatedFields.mileage = parseInt(formValues.mileage);
      }
      if (formValues.model !== "") {
        updatedFields.model = formValues.model;
      }
      if (formValues.price !== "") {
        updatedFields.price = parseInt(formValues.price);
      }
      if (formValues.priceFipe !== "") {
        updatedFields.priceFipe = parseInt(formValues.priceFipe);
      }
      if (formValues.year !== "") {
        updatedFields.year = parseInt(formValues.year);
      }
      if (formValues.images !== "") {
        updatedFields.images = formValues.images;
      }

      const dataUpdate = {
        ...updatedFields,
      };

      try {
        announcementUpdate(dataUpdate);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  async function getModels(value: string) {
    const res = await getAllModelsByBrand(value);
    setModels(res);
  }

  async function getCarDetails(value: string) {
    const car = models.filter((model) => model.name === value);
    setCarDetail(car[0]);
  }

  useEffect(() => {
    const allValuesAreEmpty = Object.values(formValues).every(
      (value) => value === ""
    );
    setIsFormValid(!allValuesAreEmpty);
  }, [formValues]);

  useEffect(() => {
    setIsFormValid(!!descriptionValue);
  }, [descriptionValue]);

  useEffect(() => {
    (async () => {
      const res = await getAllBrands();
      const brands = Object.keys(res);
      setBrands(brands);
    })();
  }, []);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setShowInput(false);
          onClose();
        }}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent
          mt="100px"
          as="form"
          fontFamily="Lexend"
          onSubmit={(event) => {
            event.preventDefault();
            handlerForm(event);
          }}
          zIndex="10000"
        >
          <ModalHeader>
            <TextH7
              fontWeight={800}
              fontFamily={"Lenxend"}
              color={Colors.brand1}
            >
              Editar anúncio
            </TextH7>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody display="flex" flexDirection="column" gap="20px">
            <TextB2 fontWeight={500}>Informações do veículo</TextB2>
            <FormControl>
              <Flex direction="column" gap="15px">
                <Box>
                  <Flex flexDir={"column"} gap={5}>
                    <FormLabel margin={0} css={labelCSS}>
                      Marca
                    </FormLabel>
                    <Select
                      css={inputCSS}
                      color={Colors.brand1}
                      focusBorderColor={Colors.brand1}
                      value={formValues.brand}
                      {...register("brand", {
                        onChange: (e) => {
                          setFormValues({
                            ...formValues,
                            brand: e.target.value,
                          });
                          handleInputChange;
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
                    <FormLabel margin={0} css={labelCSS}>
                      Modelo
                    </FormLabel>
                    <Select
                      css={inputCSS}
                      color={Colors.brand1}
                      focusBorderColor={Colors.brand1}
                      isDisabled={models.length ? false : true}
                      value={formValues.model}
                      {...register("model", {
                        onChange: (e) => {
                          setFormValues({
                            ...formValues,
                            model: e.target.value,
                          });
                          handleInputChange;
                          getCarDetails(e.target.value);
                        },
                      })}
                    >
                      {models.map((model, i) => (
                        <option key={i} value={model.name}>
                          {model.name}
                        </option>
                      ))}
                    </Select>
                    <Flex mt="15px" gap={2}>
                      <InputFormComponent
                        labelText={"Combustivel"}
                        register={register}
                        value={formValues.fuelType}
                        {...register("model", {
                          onChange: (e) => {
                            setFormValues({
                              ...formValues,
                              fuelType: e.target.value,
                            });
                            handleInputChange;
                            getCarDetails(e.target.value);
                          },
                        })}
                        autoComplete="off"
                      />
                      <InputFormComponent
                        type="number"
                        labelText={"Ano"}
                        register={register}
                        name="year"
                        value={formValues.year}
                        onChange={(event) => {
                          setFormValues({
                            ...formValues,
                            year: event.target.value,
                          });
                          handleInputChange(event);
                        }}
                        autoComplete="off"
                      />
                    </Flex>
                    <Flex mt="15px" gap={2}>
                      <InputFormComponent
                        type="number"
                        labelText={"Quilometragem"}
                        register={register}
                        name="mileage"
                        value={formValues.mileage}
                        onChange={(event) => {
                          setFormValues({
                            ...formValues,
                            mileage: event.target.value,
                          });
                          handleInputChange(event);
                        }}
                        autoComplete="off"
                      />
                      <InputFormComponent
                        labelText={"Cor"}
                        register={register}
                        name="color"
                        value={formValues.color}
                        onChange={(event) => {
                          setFormValues({
                            ...formValues,
                            color: event.target.value,
                          });
                          handleInputChange(event);
                        }}
                        autoComplete="off"
                      />
                    </Flex>
                    <Flex mt="15px" gap={2}>
                      <InputFormComponent
                        type="number"
                        labelText={"Preço tabela FIPE"}
                        register={register}
                        name="priceFipe"
                        value={formValues.priceFipe}
                        onChange={(event) => {
                          setFormValues({
                            ...formValues,
                            priceFipe: event.target.value,
                          });
                          handleInputChange(event);
                        }}
                        autoComplete="off"
                      />
                      <InputFormComponent
                        type="number"
                        labelText={"Preço"}
                        register={register}
                        name="price"
                        value={formValues.price}
                        onChange={(event) => {
                          setFormValues({
                            ...formValues,
                            price: event.target.value,
                          });
                          handleInputChange(event);
                        }}
                        autoComplete="off"
                      />
                    </Flex>
                    <FormLabel m={0}>Descrição</FormLabel>
                    <Textarea
                      css={inputCSS}
                      autoComplete="off"
                      color={Colors.brand1}
                      focusBorderColor={Colors.brand1}
                      resize={"none"}
                      value={formValues.description}
                      {...register("description", {
                        onChange: (e) => {
                          setFormValues({
                            ...formValues,
                            description: e.target.value,
                          });
                          handleInputChange(e);
                        },
                      })}
                    />
                    <Flex flexDir={"column"} gap={2}>
                      <InputFormComponent
                        labelText={"Imagem da capa"}
                        register={register}
                        name="banner"
                        placeholder="Ex: http://www.imagestock.com"
                        value={formValues.banner}
                        onChange={(event) => {
                          setFormValues({
                            ...formValues,
                            banner: event.target.value,
                          });
                          handleInputChange(event);
                        }}
                        autoComplete="off"
                      />
                    </Flex>
                    {image.map((_, i) => {
                      if (i >= 6) return null;
                      return (
                        <Box key={i}>
                          <FormLabel>{`${i + 1}º Imagem da galeria`}</FormLabel>
                          <Input
                            css={inputCSS}
                            autoComplete="off"
                            placeholder="Ex: http://www.imagestock.com"
                            color={Colors.brand1}
                            focusBorderColor={Colors.brand1}
                            {...register(`image${i + 1}`, {
                              onChange: (e) => {
                                setFormValues({
                                  ...formValues,
                                  images: e.target.value,
                                });
                                handleInputChange;
                              },
                            })}
                          />
                        </Box>
                      );
                    })}
                    <ButtonBrand4
                      alignSelf="flex-start"
                      fontSize="14px"
                      onClick={() =>
                        setImage((prevImages) => [...prevImages, 1])
                      }
                    >
                      Adicionar imagem
                    </ButtonBrand4>
                  </Flex>
                </Box>
              </Flex>
            </FormControl>
          </ModalBody>
          <ModalFooter gap="10px">
            <ButtonGray6
              fontWeight={500}
              color={Colors.grey2}
              onClick={() => handleClick("delete")}
            >
              Excluir anúncio
            </ButtonGray6>
            <ButtonBrand1
              isDisabled={!isFormValid}
              type="submit"
              onClick={(event) => handlerForm(event)}
            >
              Salvar Alterações
            </ButtonBrand1>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
