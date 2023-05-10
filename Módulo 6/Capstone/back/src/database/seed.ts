import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

type accountType = "buyer" | "advertiser";

interface IUserRequest {
    accountType: accountType;
    birthdate: Date;
    cpf: string;
    email: string;
    name: string;
    password: string;
    phone: string;
}

async function seed() {
    const passUserBuyer1 = await hash("alberto1234", 8);
    const passUserBuyer2 = await hash("leonardo1234", 8);

    // Usuários Comuns
    const buyers = await prisma.user.createMany({
        data: [
            {
                name: "Alberto",
                birthdate: new Date(),
                accountType: "buyer",
                cpf: "458.794.564-11",
                email: "alberto@gmail.com",
                password: passUserBuyer1,
                phone: "(11) 95454-2512",
            },
            {
                name: "Leonardo",
                birthdate: new Date(),
                accountType: "buyer",
                cpf: "213.124.594-15",
                email: "leonardo@gmail.com",
                password: passUserBuyer2,
                phone: "(11) 94224-2511",
            },
        ],
    });

    const passUserAdvertiser1 = await hash("gabriela1234", 8);
    const passUserAdvertiser2 = await hash("pedro1234", 8);
    const passUserAdvertiser3 = await hash("juliana1234", 8);
    const passUserAdvertiser4 = await hash("lucas1234", 8);
    const passUserAdvertiser5 = await hash("mariana1234", 8);

    // Usuários Vendedores
    const gabrielaAdvertiser = await prisma.user.create({
        data: {
            name: "Gabriela",
            birthdate: new Date("1994-05-08"),
            accountType: "advertiser",
            cpf: "789.123.456-00",
            email: "gabriela@gmail.com",
            password: passUserAdvertiser1,
            phone: "(21) 96459-9179",
        },
        include: {
            address: true,
            announcements: true,
            comments: true
        }
    });

    const pedroAdvertiser = await prisma.user.create({
        data: {
            name: "Pedro",
            birthdate: new Date("1998-09-20"),
            accountType: "advertiser",
            cpf: "123.456.789-00",
            email: "pedro@gmail.com",
            password: passUserAdvertiser2,
            phone: "(11) 98128-8890",
        },
        include: {
            address: true,
            announcements: true,
            comments: true
        }
    });

    const julianaAdvertiser = await prisma.user.create({
        data: {
            name: "Juliana",
            birthdate: new Date("1986-01-15"),
            accountType: "advertiser",
            cpf: "555.666.777-11",
            email: "juliana@gmail.com",
            password: passUserAdvertiser3,
            phone: "(51) 97723-7765",
        },
        include: {
            address: true,
            announcements: true,
            comments: true
        }
    });

    const lucasAdvertiser = await prisma.user.create({
        data: {
            name: "Lucas",
            birthdate: new Date("2000-12-07"),
            accountType: "advertiser",
            cpf: "987.654.321-11",
            email: "lucas@gmail.com",
            password: passUserAdvertiser4,
            phone: "(31) 96236-6689",
        },
        include: {
            address: true,
            announcements: true,
            comments: true
        }
    });

    const marianaAdvertiser = await prisma.user.create({
        data: {
            name: "Mariana",
            birthdate: new Date("1992-07-02"),
            accountType: "advertiser",
            cpf: "222.333.444-00",
            email: "mariana@gmail.com",
            password: passUserAdvertiser5,
            phone: "(12) 97544-4444",
        },
        include: {
            address: true,
            announcements: true,
            comments: true
        }
    });

    // Anúncios Gabriela
    const gabrielaAnnouncement1 = await prisma.announcement.create({
        data: {
            brand: "Toyota",
            model: "Corolla",
            year: 2018,
            mileage: 70000,
            price: 52000.0,
            priceFipe: 50000.0,
            fuelType: "Gasoline",
            color: "White",
            banner: "https://example.com/image1.jpg",
            description: "A reliable car with great fuel efficiency",
            isActive: true,
            isGoodBuy: true,
            userId: gabrielaAdvertiser.id,
        },
    });

    const gabrielaAnnouncement2 = await prisma.announcement.create({
        data: {
            brand: "Chevrolet",
            model: "Onix",
            year: 2020,
            mileage: 40000,
            price: 42000.0,
            priceFipe: 39000.0,
            fuelType: "Ethanol",
            color: "Blue",
            banner: "https://example.com/image2.jpg",
            description: "A great car for everyday use",
            isActive: true,
            isGoodBuy: false,
            userId: gabrielaAdvertiser.id,
        },
    });

    const gabrielaAnnouncement3 = await prisma.announcement.create({
        data: {
            brand: "Volkswagen",
            model: "Gol",
            year: 2015,
            mileage: 90000,
            price: 25000.0,
            priceFipe: 22000.0,
            fuelType: "Gasoline",
            color: "Black",
            banner: "https://example.com/image3.jpg",
            description: "A simple car with low maintenance costs",
            isActive: true,
            isGoodBuy: true,
            userId: gabrielaAdvertiser.id,
        },
    });

    const gabrielaAnnouncement4 = await prisma.announcement.create({
        data: {
            brand: "Honda",
            model: "Civic",
            year: 2019,
            mileage: 50000,
            price: 75000.0,
            priceFipe: 70000.0,
            fuelType: "Gasoline",
            color: "Silver",
            banner: "https://example.com/image5.jpg",
            description: "A sporty car with great handling",
            isActive: true,
            isGoodBuy: false,
            userId: gabrielaAdvertiser.id,
        },
    });

    const gabrielaAnnouncement5 = await prisma.announcement.create({
        data: {
            brand: "Toyota",
            model: "Corolla",
            year: 2018,
            mileage: 70000,
            price: 52000.0,
            priceFipe: 50000.0,
            fuelType: "Gasoline",
            color: "White",
            banner: "https://example.com/image1.jpg",
            description: "A reliable car with great fuel efficiency",
            isActive: true,
            isGoodBuy: true,
            userId: gabrielaAdvertiser.id,
        },
    });

    // Anúncios Pedro
    const pedroAnnouncement1 = await prisma.announcement.create({
        data: {
            brand: "Fiat",
            model: "Uno",
            year: 2012,
            mileage: 80000,
            price: 15000.0,
            priceFipe: 13000.0,
            fuelType: "Gasoline",
            color: "Red",
            banner: "https://example.com/image6.jpg",
            description: "A small and economic car",
            isActive: true,
            isGoodBuy: true,
            userId: pedroAdvertiser.id,
        },
    });

    const pedroAnnouncement2 = await prisma.announcement.create({
        data: {
            brand: "Ford",
            model: "Ka",
            year: 2015,
            mileage: 90000,
            price: 20000.0,
            priceFipe: 18000.0,
            fuelType: "Ethanol",
            color: "White",
            banner: "https://example.com/image7.jpg",
            description: "A great car for city driving",
            isActive: true,
            isGoodBuy: true,
            userId: pedroAdvertiser.id,
        },
    });

    const pedroAnnouncement3 = await prisma.announcement.create({
        data: {
            brand: "Volkswagen",
            model: "Saveiro",
            year: 2017,
            mileage: 60000,
            price: 35000.0,
            priceFipe: 32000.0,
            fuelType: "Flex",
            color: "Silver",
            banner: "https://example.com/image8.jpg",
            description: "A pickup truck with low fuel consumption",
            isActive: true,
            isGoodBuy: true,
            userId: pedroAdvertiser.id,
        },
    });

    const pedroAnnouncement4 = await prisma.announcement.create({
        data: {
            brand: "Fiat",
            model: "Palio",
            year: 2010,
            mileage: 100000,
            price: 13000.0,
            priceFipe: 12000.0,
            fuelType: "Gasoline",
            color: "Gray",
            banner: "https://example.com/image9.jpg",
            description: "A spacious car for family use",
            isActive: true,
            isGoodBuy: false,
            userId: pedroAdvertiser.id,
        },
    });

    const pedroAnnouncement5 = await prisma.announcement.create({
        data: {
            brand: "Honda",
            model: "Fit",
            year: 2013,
            mileage: 60000,
            price: 28000.0,
            priceFipe: 26000.0,
            fuelType: "Flex",
            color: "Black",
            banner: "https://example.com/image10.jpg",
            description: "A versatile car with great cargo space",
            isActive: true,
            isGoodBuy: true,
            userId: pedroAdvertiser.id,
        },
    });

    // Anúncios Juliana
    const julianaAnnouncement1 = await prisma.announcement.create({
        data: {
            brand: "Fiat",
            model: "Palio",
            year: 2014,
            mileage: 80000,
            price: 23000.0,
            priceFipe: 21000.0,
            fuelType: "Gasoline",
            color: "Red",
            banner: "https://example.com/image6.jpg",
            description: "A simple car with low fuel consumption",
            isActive: true,
            isGoodBuy: true,
            userId: julianaAdvertiser.id,
        },
    });

    const julianaAnnouncement2 = await prisma.announcement.create({
        data: {
            brand: "Renault",
            model: "Sandero",
            year: 2018,
            mileage: 60000,
            price: 33000.0,
            priceFipe: 31000.0,
            fuelType: "Ethanol",
            color: "Black",
            banner: "https://example.com/image7.jpg",
            description: "A comfortable car for long trips",
            isActive: true,
            isGoodBuy: false,
            userId: julianaAdvertiser.id,
        },
    });

    const julianaAnnouncement3 = await prisma.announcement.create({
        data: {
            brand: "Ford",
            model: "Ka",
            year: 2016,
            mileage: 50000,
            price: 28000.0,
            priceFipe: 25000.0,
            fuelType: "Gasoline",
            color: "White",
            banner: "https://example.com/image8.jpg",
            description: "A compact car with low maintenance costs",
            isActive: true,
            isGoodBuy: true,
            userId: julianaAdvertiser.id,
        },
    });

    const julianaAnnouncement4 = await prisma.announcement.create({
        data: {
            brand: "Toyota",
            model: "Etios",
            year: 2020,
            mileage: 10000,
            price: 42000.0,
            priceFipe: 40000.0,
            fuelType: "Ethanol",
            color: "Silver",
            banner: "https://example.com/image9.jpg",
            description: "A car with great fuel efficiency and low emissions",
            isActive: true,
            isGoodBuy: true,
            userId: julianaAdvertiser.id,
        },
    });

    const julianaAnnouncement5 = await prisma.announcement.create({
        data: {
            brand: "Hyundai",
            model: "HB20",
            year: 2019,
            mileage: 40000,
            price: 38000.0,
            priceFipe: 35000.0,
            fuelType: "Gasoline",
            color: "Red",
            banner: "https://example.com/image10.jpg",
            description: "A stylish and practical car for city driving",
            isActive: true,
            isGoodBuy: false,
            userId: julianaAdvertiser.id,
        },
    });

    // Anúncios Lucas
    const lucasAnnouncement1 = await prisma.announcement.create({
        data: {
            brand: "Fiat",
            model: "Uno",
            year: 2010,
            mileage: 150000,
            price: 12000.0,
            priceFipe: 10000.0,
            fuelType: "Gasoline",
            color: "Red",
            banner: "https://example.com/image11.jpg",
            description: "A small car perfect for city driving",
            isActive: true,
            isGoodBuy: true,
            userId: lucasAdvertiser.id,
        },
    });

    const lucasAnnouncement2 = await prisma.announcement.create({
        data: {
            brand: "Volkswagen",
            model: "Voyage",
            year: 2017,
            mileage: 50000,
            price: 35000.0,
            priceFipe: 30000.0,
            fuelType: "Ethanol",
            color: "Gray",
            banner: "https://example.com/image12.jpg",
            description: "A spacious car for family trips",
            isActive: true,
            isGoodBuy: false,
            userId: lucasAdvertiser.id,
        },
    });

    const lucasAnnouncement3 = await prisma.announcement.create({
        data: {
            brand: "Renault",
            model: "Sandero",
            year: 2015,
            mileage: 80000,
            price: 28000.0,
            priceFipe: 25000.0,
            fuelType: "Gasoline",
            color: "Blue",
            banner: "https://example.com/image13.jpg",
            description: "A car with great cost-benefit",
            isActive: true,
            isGoodBuy: true,
            userId: lucasAdvertiser.id,
        },
    });

    const lucasAnnouncement4 = await prisma.announcement.create({
        data: {
            brand: "Chevrolet",
            model: "Prisma",
            year: 2019,
            mileage: 40000,
            price: 45000.0,
            priceFipe: 40000.0,
            fuelType: "Ethanol",
            color: "Silver",
            banner: "https://example.com/image14.jpg",
            description: "A car with great fuel efficiency",
            isActive: true,
            isGoodBuy: true,
            userId: lucasAdvertiser.id,
        },
    });

    const lucasAnnouncement5 = await prisma.announcement.create({
        data: {
            brand: "Ford",
            model: "Fusion",
            year: 2013,
            mileage: 110000,
            price: 35000.0,
            priceFipe: 32000.0,
            fuelType: "Gasoline",
            color: "Black",
            banner: "https://example.com/image15.jpg",
            description: "A luxurious car with great comfort",
            isActive: true,
            isGoodBuy: false,
            userId: lucasAdvertiser.id,
        },
    });

    // Anúncios Mariana
    const marianaAnnouncement1 = await prisma.announcement.create({
        data: {
            brand: "Renault",
            model: "Kwid",
            year: 2020,
            mileage: 15000,
            price: 35000.0,
            priceFipe: 32000.0,
            fuelType: "Ethanol",
            color: "Red",
            banner: "https://example.com/image11.jpg",
            description: "A compact car with great fuel efficiency",
            isActive: true,
            isGoodBuy: true,
            userId: marianaAdvertiser.id,
        },
    });

    const marianaAnnouncement2 = await prisma.announcement.create({
        data: {
            brand: "Fiat",
            model: "Mobi",
            year: 2021,
            mileage: 10000,
            price: 28000.0,
            priceFipe: 25000.0,
            fuelType: "Ethanol",
            color: "Gray",
            banner: "https://example.com/image12.jpg",
            description: "A small car with low maintenance costs",
            isActive: true,
            isGoodBuy: false,
            userId: marianaAdvertiser.id,
        },
    });

    const marianaAnnouncement3 = await prisma.announcement.create({
        data: {
            brand: "Volkswagen",
            model: "Polo",
            year: 2018,
            mileage: 50000,
            price: 43000.0,
            priceFipe: 40000.0,
            fuelType: "Gasoline",
            color: "Blue",
            banner: "https://example.com/image13.jpg",
            description: "A comfortable and spacious car",
            isActive: true,
            isGoodBuy: true,
            userId: marianaAdvertiser.id,
        },
    });

    const marianaAnnouncement4 = await prisma.announcement.create({
        data: {
            brand: "Chevrolet",
            model: "Tracker",
            year: 2021,
            mileage: 8000,
            price: 105000.0,
            priceFipe: 100000.0,
            fuelType: "Flex",
            color: "White",
            banner: "https://example.com/image14.jpg",
            description: "A versatile SUV for any terrain",
            isActive: true,
            isGoodBuy: false,
            userId: marianaAdvertiser.id,
        },
    });

    const marianaAnnouncement5 = await prisma.announcement.create({
        data: {
            brand: "Toyota",
            model: "Etios",
            year: 2015,
            mileage: 60000,
            price: 28000.0,
            priceFipe: 25000.0,
            fuelType: "Ethanol",
            color: "Silver",
            banner: "https://example.com/image15.jpg",
            description: "A reliable and low-cost car",
            isActive: true,
            isGoodBuy: true,
            userId: marianaAdvertiser.id,
        },
    });

    // Imagens

    const gabrielaImage =
        "https://classic.exame.com/wp-content/uploads/2023/01/Chevrolet-Tracker.jpg?quality=70&strip=info&w=1024";
    const pedroImage =
        "https://s2.glbimg.com/mY7ohl5ehq4QhHYpLGHzGpSf_Uk=/0x0:1920x1280/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/1/d/V5vubYToAk0A1rpgbgOQ/strada-ranch-154.jpg";
    const julianaImage =
        "https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2022/08/30164929/ALTA-7242-1160x653.jpg";
    const lucasImage =
        "https://media.gazetadopovo.com.br/2020/01/17155825/lamborghini-huracan-Alexander-Migl-wikimedia-commons-660x372.jpg";
    const marianaImage =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSATgHyq4U_KS7Z84qELwuZah9nizy4VmKDw";

    // Imagens dos Anúncios de Gabriela

    // 1
    const image1GabrielaAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement1.id,
            imgUrl: gabrielaImage,
        },
    });

    const image2GabrielaAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement1.id,
            imgUrl: gabrielaImage,
        },
    });

    const image3GabrielaAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement1.id,
            imgUrl: gabrielaImage,
        },
    });

    const image4GabrielaAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement1.id,
            imgUrl: gabrielaImage,
        },
    });

    const image5GabrielaAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement1.id,
            imgUrl: gabrielaImage,
        },
    });

    // 2
    const image1GabrielaAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement2.id,
            imgUrl: gabrielaImage,
        },
    });

    const image2GabrielaAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement2.id,
            imgUrl: gabrielaImage,
        },
    });

    const image3GabrielaAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement2.id,
            imgUrl: gabrielaImage,
        },
    });

    const image4GabrielaAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement2.id,
            imgUrl: gabrielaImage,
        },
    });

    const image5GabrielaAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement2.id,
            imgUrl: gabrielaImage,
        },
    });

    // 3
    const image1GabrielaAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement3.id,
            imgUrl: gabrielaImage,
        },
    });

    const image2GabrielaAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement3.id,
            imgUrl: gabrielaImage,
        },
    });

    const image3GabrielaAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement3.id,
            imgUrl: gabrielaImage,
        },
    });

    const image4GabrielaAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement3.id,
            imgUrl: gabrielaImage,
        },
    });

    const image5GabrielaAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement3.id,
            imgUrl: gabrielaImage,
        },
    });

    // 4
    const image1GabrielaAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement4.id,
            imgUrl: gabrielaImage,
        },
    });

    const image2GabrielaAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement4.id,
            imgUrl: gabrielaImage,
        },
    });

    const image3GabrielaAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement4.id,
            imgUrl: gabrielaImage,
        },
    });

    const image4GabrielaAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement4.id,
            imgUrl: gabrielaImage,
        },
    });

    const image5GabrielaAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement4.id,
            imgUrl: gabrielaImage,
        },
    });

    // 5
    const image1GabrielaAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement5.id,
            imgUrl: gabrielaImage,
        },
    });

    const image2GabrielaAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement5.id,
            imgUrl: gabrielaImage,
        },
    });

    const image3GabrielaAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement5.id,
            imgUrl: gabrielaImage,
        },
    });

    const image4GabrielaAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement5.id,
            imgUrl: gabrielaImage,
        },
    });

    const image5GabrielaAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: gabrielaAnnouncement5.id,
            imgUrl: gabrielaImage,
        },
    });

    // Imagens dos Anúncios de Pedro

    // 1
    const image1PedroAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement1.id,
            imgUrl: pedroImage,
        },
    });

    const image2PedroAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement1.id,
            imgUrl: pedroImage,
        },
    });

    const image3PedroAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement1.id,
            imgUrl: pedroImage,
        },
    });

    const image4PedroAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement1.id,
            imgUrl: pedroImage,
        },
    });

    const image5PedroAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement1.id,
            imgUrl: pedroImage,
        },
    });

    // 2
    const image1PedroAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement2.id,
            imgUrl: pedroImage,
        },
    });

    const image2PedroAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement2.id,
            imgUrl: pedroImage,
        },
    });

    const image3PedroAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement2.id,
            imgUrl: pedroImage,
        },
    });

    const image4PedroAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement2.id,
            imgUrl: pedroImage,
        },
    });

    const image5PedroAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement2.id,
            imgUrl: pedroImage,
        },
    });

    // 3
    const image1PedroAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement3.id,
            imgUrl: pedroImage,
        },
    });

    const image2PedroAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement3.id,
            imgUrl: pedroImage,
        },
    });

    const image3PedroAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement3.id,
            imgUrl: pedroImage,
        },
    });

    const image4PedroAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement3.id,
            imgUrl: pedroImage,
        },
    });

    const image5PedroAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement3.id,
            imgUrl: pedroImage,
        },
    });

    // 4
    const image1PedroAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement4.id,
            imgUrl: pedroImage,
        },
    });

    const image2PedroAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement4.id,
            imgUrl: pedroImage,
        },
    });

    const image3PedroAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement4.id,
            imgUrl: pedroImage,
        },
    });

    const image4PedroAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement4.id,
            imgUrl: pedroImage,
        },
    });

    const image5PedroAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement4.id,
            imgUrl: pedroImage,
        },
    });

    // 5
    const image1PedroAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement5.id,
            imgUrl: pedroImage,
        },
    });

    const image2PedroAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement5.id,
            imgUrl: pedroImage,
        },
    });

    const image3PedroAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement5.id,
            imgUrl: pedroImage,
        },
    });

    const image4PedroAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement5.id,
            imgUrl: pedroImage,
        },
    });

    const image5PedroAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: pedroAnnouncement5.id,
            imgUrl: pedroImage,
        },
    });

    // Imagens dos Anúncios de Juliana

    // 1
    const image1JulianaAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement1.id,
            imgUrl: julianaImage,
        },
    });

    const image2JulianaAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement1.id,
            imgUrl: julianaImage,
        },
    });

    const image3JulianaAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement1.id,
            imgUrl: julianaImage,
        },
    });

    const image4JulianaAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement1.id,
            imgUrl: julianaImage,
        },
    });

    const image5JulianaAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement1.id,
            imgUrl: julianaImage,
        },
    });

    // 2
    const image1JulianaAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement2.id,
            imgUrl: julianaImage,
        },
    });

    const image2JulianaAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement2.id,
            imgUrl: julianaImage,
        },
    });

    const image3JulianaAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement2.id,
            imgUrl: julianaImage,
        },
    });

    const image4JulianaAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement2.id,
            imgUrl: julianaImage,
        },
    });

    const image5JulianaAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement2.id,
            imgUrl: julianaImage,
        },
    });

    // 3
    const image1JulianaAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement3.id,
            imgUrl: julianaImage,
        },
    });

    const image2JulianaAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement3.id,
            imgUrl: julianaImage,
        },
    });

    const image3JulianaAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement3.id,
            imgUrl: julianaImage,
        },
    });

    const image4JulianaAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement3.id,
            imgUrl: julianaImage,
        },
    });

    const image5JulianaAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement3.id,
            imgUrl: julianaImage,
        },
    });

    // 4
    const image1JulianaAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement4.id,
            imgUrl: julianaImage,
        },
    });

    const image2JulianaAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement4.id,
            imgUrl: julianaImage,
        },
    });

    const image3JulianaAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement4.id,
            imgUrl: julianaImage,
        },
    });

    const image4JulianaAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement4.id,
            imgUrl: julianaImage,
        },
    });

    const image5JulianaAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement4.id,
            imgUrl: julianaImage,
        },
    });

    // 5
    const image1JulianaAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement5.id,
            imgUrl: julianaImage,
        },
    });

    const image2JulianaAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement5.id,
            imgUrl: julianaImage,
        },
    });

    const image3JulianaAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement5.id,
            imgUrl: julianaImage,
        },
    });

    const image4JulianaAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement5.id,
            imgUrl: julianaImage,
        },
    });

    const image5JulianaAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: julianaAnnouncement5.id,
            imgUrl: julianaImage,
        },
    });

    // Imagens dos Anúncios de Lucas

    // 1
    const image1LucasAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement1.id,
            imgUrl: lucasImage,
        },
    });

    const image2LucasAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement1.id,
            imgUrl: lucasImage,
        },
    });

    const image3LucasAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement1.id,
            imgUrl: lucasImage,
        },
    });

    const image4LucasAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement1.id,
            imgUrl: lucasImage,
        },
    });

    const image5LucasAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement1.id,
            imgUrl: lucasImage,
        },
    });

    // 2
    const image1LucasAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement2.id,
            imgUrl: lucasImage,
        },
    });

    const image2LucasAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement2.id,
            imgUrl: lucasImage,
        },
    });

    const image3LucasAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement2.id,
            imgUrl: lucasImage,
        },
    });

    const image4LucasAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement2.id,
            imgUrl: lucasImage,
        },
    });

    const image5LucasAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement2.id,
            imgUrl: lucasImage,
        },
    });

    // 3
    const image1LucasAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement3.id,
            imgUrl: lucasImage,
        },
    });

    const image2LucasAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement3.id,
            imgUrl: lucasImage,
        },
    });

    const image3LucasAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement3.id,
            imgUrl: lucasImage,
        },
    });

    const image4LucasAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement3.id,
            imgUrl: lucasImage,
        },
    });

    const image5LucasAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement3.id,
            imgUrl: lucasImage,
        },
    });

    // 4
    const image1LucasAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement4.id,
            imgUrl: lucasImage,
        },
    });

    const image2LucasAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement4.id,
            imgUrl: lucasImage,
        },
    });

    const image3LucasAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement4.id,
            imgUrl: lucasImage,
        },
    });

    const image4LucasAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement4.id,
            imgUrl: lucasImage,
        },
    });

    const image5LucasAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement4.id,
            imgUrl: lucasImage,
        },
    });

    // 5
    const image1LucasAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement5.id,
            imgUrl: lucasImage,
        },
    });

    const image2LucasAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement5.id,
            imgUrl: lucasImage,
        },
    });

    const image3LucasAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement5.id,
            imgUrl: lucasImage,
        },
    });

    const image4LucasAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement5.id,
            imgUrl: lucasImage,
        },
    });

    const image5LucasAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: lucasAnnouncement5.id,
            imgUrl: lucasImage,
        },
    });

    // Imagens dos Anúncios de Mariana

    // 1
    const image1MarianaAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement1.id,
            imgUrl: marianaImage,
        },
    });

    const image2MarianaAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement1.id,
            imgUrl: marianaImage,
        },
    });

    const image3MarianaAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement1.id,
            imgUrl: marianaImage,
        },
    });

    const image4MarianaAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement1.id,
            imgUrl: marianaImage,
        },
    });

    const image5MarianaAnnouncement1 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement1.id,
            imgUrl: marianaImage,
        },
    });

    // 2
    const image1MarianaAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement2.id,
            imgUrl: marianaImage,
        },
    });

    const image2MarianaAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement2.id,
            imgUrl: marianaImage,
        },
    });

    const image3MarianaAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement2.id,
            imgUrl: marianaImage,
        },
    });

    const image4MarianaAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement2.id,
            imgUrl: marianaImage,
        },
    });

    const image5MarianaAnnouncement2 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement2.id,
            imgUrl: marianaImage,
        },
    });

    // 3
    const image1MarianaAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement3.id,
            imgUrl: marianaImage,
        },
    });

    const image2MarianaAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement3.id,
            imgUrl: marianaImage,
        },
    });

    const image3MarianaAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement3.id,
            imgUrl: marianaImage,
        },
    });

    const image4MarianaAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement3.id,
            imgUrl: marianaImage,
        },
    });

    const image5MarianaAnnouncement3 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement3.id,
            imgUrl: marianaImage,
        },
    });

    // 4
    const image1MarianaAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement4.id,
            imgUrl: marianaImage,
        },
    });

    const image2MarianaAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement4.id,
            imgUrl: marianaImage,
        },
    });

    const image3MarianaAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement4.id,
            imgUrl: marianaImage,
        },
    });

    const image4MarianaAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement4.id,
            imgUrl: marianaImage,
        },
    });

    const image5MarianaAnnouncement4 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement4.id,
            imgUrl: marianaImage,
        },
    });

    // 5
    const image1MarianaAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement5.id,
            imgUrl: marianaImage,
        },
    });

    const image2MarianaAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement5.id,
            imgUrl: marianaImage,
        },
    });

    const image3MarianaAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement5.id,
            imgUrl: marianaImage,
        },
    });

    const image4MarianaAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement5.id,
            imgUrl: marianaImage,
        },
    });

    const image5MarianaAnnouncement5 = await prisma.image.create({
        data: {
            announcementId: marianaAnnouncement5.id,
            imgUrl: marianaImage,
        },
    });
}

seed()
    .then(() => {
        console.log('\nSeed Worked With Success 🚀🚀\n')
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
