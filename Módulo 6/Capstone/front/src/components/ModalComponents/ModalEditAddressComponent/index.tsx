import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  FormControl,
  Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState, useContext, useEffect } from "react";
import { ButtonGray6, ButtonGray5, ButtonBrand1 } from "../../ButtomComponents";
import { TextB2, TextH7 } from "../../TextComponents";
import { InputFormComponent } from "../../InputFormComponent/InputFormRegisterUserComponent";
import { Colors } from "../../../styles/colors";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateUserAddressSchema } from "../../../schemas/user.schema";
import { UserContext } from "../../../contexts/userContext";

export const ModalEditAddress = ({ isOpen, onClose }: ModalProps) => {
  const { userEditAddress, user } = useContext(UserContext);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formValues, setFormValues] = useState({
    zipCode: "",
    state: "",
    city: "",
    street: "",
    number: "",
    complement: "",
  });

  useEffect(() => {
    const allValuesAreEmpty = Object.values(formValues).every(
      (value) => value === ""
    );
    setIsFormValid(!allValuesAreEmpty);
  }, [formValues]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateUserAddressSchema),
  });

  const handlerForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const updatedFields: {
      complement?: string;
      street?: string;
      number?: string;
      city?: string;
      state?: string;
      zipCode?: string;
    } = {};

    if (user) {
      if (formValues.complement !== "") {
        updatedFields.complement = formValues.complement;
      }

      if (formValues.street !== "") {
        updatedFields.street = formValues.street;
      }

      if (formValues.number !== "") {
        updatedFields.number = formValues.number;
      }

      if (formValues.city !== "") {
        updatedFields.city = formValues.city;
      }

      if (formValues.state !== "") {
        updatedFields.state = formValues.state;
      }

      if (formValues.zipCode !== "") {
        updatedFields.zipCode = formValues.zipCode;
      }

      const dataUpdate = {
        ...updatedFields,
      };

      try {
        userEditAddress(dataUpdate);
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

  useEffect(() => {
    const allValuesAreEmpty = Object.values(formValues).every(
      (value) => value === ""
    );
    setIsFormValid(!allValuesAreEmpty);
  }, [formValues]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
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
              Editar endereço
            </TextH7>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody display="flex" flexDirection="column" gap="20px">
            <TextB2 fontWeight={500}>Informações de endereço</TextB2>
            <FormControl>
              <Flex direction="column" gap="15px">
                <Box>
                  <Flex flexDir={"column"} gap={5}>
                    <InputFormComponent
                      mask={"99999.999"}
                      labelText={"CEP"}
                      register={register}
                      name="zipCode"
                      value={formValues.zipCode}
                      onChange={(event) => {
                        setFormValues({
                          ...formValues,
                          zipCode: event.target.value,
                        });
                        handleInputChange(event);
                      }}
                      autoComplete="off"
                    />
                    <Flex gap={3}>
                      <Flex flexDir={"column"} gap={2}>
                        <InputFormComponent
                          labelText={"Estado"}
                          register={register}
                          name="state"
                          value={formValues.state}
                          onChange={(event) => {
                            setFormValues({
                              ...formValues,
                              state: event.target.value,
                            });
                            handleInputChange(event);
                          }}
                          autoComplete="off"
                        />
                      </Flex>
                      <Flex flexDir={"column"} gap={2}>
                        <InputFormComponent
                          labelText={"Cidade"}
                          register={register}
                          name="city"
                          value={formValues.city}
                          onChange={(event) => {
                            setFormValues({
                              ...formValues,
                              city: event.target.value,
                            });
                            handleInputChange(event);
                          }}
                          autoComplete="off"
                        />
                      </Flex>
                    </Flex>
                    <InputFormComponent
                      labelText={"Rua"}
                      register={register}
                      name="street"
                      value={formValues.street}
                      onChange={(event) => {
                        setFormValues({
                          ...formValues,
                          street: event.target.value,
                        });
                        handleInputChange(event);
                      }}
                      autoComplete="off"
                    />
                    <Flex gap={3}>
                      <Flex flexDir={"column"} gap={2}>
                        <InputFormComponent
                          labelText={"Número"}
                          type="number"
                          register={register}
                          name="number"
                          value={formValues.number}
                          onChange={(event) => {
                            setFormValues({
                              ...formValues,
                              number: event.target.value,
                            });
                            handleInputChange(event);
                          }}
                          autoComplete="off"
                        />
                      </Flex>
                      <Flex flexDir={"column"} gap={2}>
                        <InputFormComponent
                          labelText={"Complemento"}
                          register={register}
                          name="complement"
                          value={formValues.complement}
                          onChange={(event) => {
                            setFormValues({
                              ...formValues,
                              complement: event.target.value,
                            });
                            handleInputChange(event);
                          }}
                          autoComplete="off"
                        />
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </FormControl>
          </ModalBody>
          <ModalFooter gap="10px">
            <ButtonGray6
              fontWeight={500}
              color={Colors.grey2}
              onClick={onClose}
            >
              Cancelar
            </ButtonGray6>
            <ButtonBrand1
              isDisabled={!isFormValid}
              onClick={(event) => handlerForm(event)}
              type="submit"
            >
              Salvar Alterações
            </ButtonBrand1>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
