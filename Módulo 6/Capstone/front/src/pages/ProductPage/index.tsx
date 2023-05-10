import { useParams } from "react-router-dom";
import { Container, Flex } from "@chakra-ui/react";
import { useContext, useEffect } from "react";

import { ProductTitleComponent } from "../../components/ProductTitleComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { ProductDescriptionComponent } from "../../components/ProductDescriptionComponent";
import { ProductCommentsComponent } from "../../components/ProductCommentsComponent";
import { ProductUserCommentComponent } from "../../components/ProductUserCommentComponent";
import { FooterComponent } from "../../components/FooterComponent";
import { ProductBannerComponent } from "../../components/ProductBannerComponent";
import { ProductGalleryComponent } from "../../components/ProductGalleryComponent";
import { ProductAnnouncerInfoComponent } from "../../components/ProductAnnouncerInfoComponent";
import { PurpleBackgroundComponent } from "../../components/PurpleBackgroundComponent";
import { AnnouncementContext } from "../../contexts/announcementContext";

export const ProductPage = () => {
  const { id } = useParams();

  const { announcementListOne, announcement } = useContext(AnnouncementContext);

  useEffect(() => {
    announcementListOne(id!);
  }, []);

  if (!announcement) return <h1>Page not found.</h1>;

  return (
    <>
      <HeaderComponent />
      <PurpleBackgroundComponent />
      <Container maxW="1200px" pt={"130px"}>
        <Flex gap={"25px"} wrap={"wrap"} justifyContent={"center"}>
          <Flex direction={"column"} gap={"25px"} w={"750px"}>
            <ProductBannerComponent announcement={announcement} />
            <ProductTitleComponent announcement={announcement} />
            <ProductDescriptionComponent announcement={announcement} />
          </Flex>

          <Flex
            direction={"column"}
            gap={"25px"}
            w={{ sm: "750px", xl: "380px" }}
            maxW={"100%"}
          >
            <ProductGalleryComponent announcement={announcement} />
            <ProductAnnouncerInfoComponent announcement={announcement} />
          </Flex>
        </Flex>

        <Flex
          direction={"column"}
          gap={"25px"}
          mt={"25px"}
          maxW={"750px"}
          mx={{ md: "auto", xl: "initial" }}
        >
          <ProductCommentsComponent announcement={announcement} />
          <ProductUserCommentComponent announcement={announcement} />
        </Flex>
      </Container>
      <FooterComponent />
    </>
  );
};
