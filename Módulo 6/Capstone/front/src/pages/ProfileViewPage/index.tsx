import { Box, Container, Flex } from "@chakra-ui/react";

import { FooterComponent } from "../../components/FooterComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { TextH5 } from "../../components/TextComponents";
import { ProfileViewAnnouncerInfoComponent } from "../../components/ProfileViewAnnouncerInfoComponent";
import { ListCardComponent } from "../../components/ListCardComponent";
import { PurpleBackgroundComponent } from "../../components/PurpleBackgroundComponent";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { ModalEditAd } from "../../components/ModalComponents/ModalEditAdComponent";
import { AnnouncementContext } from "../../contexts/announcementContext";
import { ModalDeleteAd } from "../../components/ModalComponents/ModalDeleteAdComponent";
import { ModalError } from "./../../components/ModalComponents/ModalErrorComponent/index";

export const ProfileViewPage = () => {
  const { id } = useParams();
  const { user, userListOne } = useContext(UserContext);
  const [userProfile, setUserProfile] = useState({});
  const navigate = useNavigate();
  const {
    editAdModalOpen,
    setEditAdModalOpen,
    deleteAdModalOpen,
    setDeleteAdModalOpen,
  } = useContext(AnnouncementContext);
  const { isErrorModalOpen, setIsErrorModalOpen, messageModal } =
    useContext(UserContext);

  useEffect(() => {
    if (user?.accountType !== "seller" && user?.id === id) {
      navigate("/");
    }
    async function main() {
      const res = await userListOne(id);

      setUserProfile(res);
    }
    main();
  }, []);

  return userProfile ? (
    <>
      <HeaderComponent />

      <PurpleBackgroundComponent />

      <Container maxW="1200px" pt={"130px"} minH={"85vh"}>
        <ProfileViewAnnouncerInfoComponent userProfile={userProfile} />

        <TextH5 fontWeight={"600"} my={"30px"}>
          Anúncios
        </TextH5>

        <Flex justifyContent={"center"} flexDir={"column"}>
          <Box mx="auto">
            <ListCardComponent filterActive={false} hideTag={false} centered />
          </Box>
        </Flex>
      </Container>
      <FooterComponent />
      <ModalEditAd
        isOpen={editAdModalOpen}
        onClose={() => setEditAdModalOpen(false)}
      />
      <ModalDeleteAd
        isOpen={deleteAdModalOpen}
        onClose={() => setDeleteAdModalOpen(false)}
      />
      <ModalError
        isOpen={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
        textHeader={messageModal.textHeader}
        textBody={messageModal.textBody}
        children={undefined}
      />
    </>
  ) : (
    <h1>User not found.</h1>
  );
};
