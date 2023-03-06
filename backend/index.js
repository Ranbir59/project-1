const express = require("express");
const app = express();
const mongoose=require('mongoose')
var cors = require("cors");
const dotenv=require('dotenv')



app.use(cors())
app.use(express.json())

//Db connectivity
dotenv.config({path:'./config.env'})
require("./db/conn")
// const User=require('./model/userSchema')
app.use(require('./router/auth'))


const PORT =process.env.PORT

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});

app.get("/cars", (req, res) => {
  res.status(200).send([
    {
      id: 1,
      image:
        "https://media.zigcdn.com/media/model/2021/Oct/front-1991775765_930x620.jpg",
      imgd: {
        imgd1:
          "https://media.zigcdn.com/media/model/2021/Oct/front-1991775765_930x620.jpg",
        imgd2:
          "https://media.zigcdn.com/media/model/2021/Oct/rear-3-4-right-484825495_930x620.jpg",
        imgd3:
          "https://media.zigcdn.com/media/model/2021/Oct/full-dashboard-center-1325631023_930x620.jpg",
        imgd4:
          "https://media.zigcdn.com/media/model/2021/Oct/ac-controls-2091498767_930x620.jpg",
        imgd5:
          "https://media.zigcdn.com/media/model/2021/Oct/bumper-1301157285_930x620.jpg",
      },
      name: "Mercedes-Benz S-Class",
      para: "Mercedes-Benz has launched the new-gen S-Class in the country. The model, which arrives in the country through the CBU route, is available in two variants that include the S450 and S400d.",
      price: "$111,100- $184,900",
    },
    {
      id: 2,
      image:
        "https://cdn.bmwblog.com/wp-content/uploads/2019/06/2019-M5-Comp-in-Marina-Bay-Blue-Metallic-04.jpg",
      imgd: {
        imgd1:
          "https://cdn.bmwblog.com/wp-content/uploads/2019/06/2019-M5-Comp-in-Marina-Bay-Blue-Metallic-04.jpg",
        imgd2:
          "https://cdn.bmwblog.com/wp-content/uploads/2019/06/2019-M5-Comp-in-Marina-Bay-Blue-Metallic-14.jpg",
        imgd3:
          "https://cdn.bmwblog.com/wp-content/uploads/2019/06/2019-M5-Comp-in-Marina-Bay-Blue-Metallic-06.jpg",
        imgd4:
          "https://cdn.bmwblog.com/wp-content/uploads/2019/06/2019-M5-Comp-in-Marina-Bay-Blue-Metallic-12.jpg",
        imgd5:
          "https://cdn.bmwblog.com/wp-content/uploads/2019/06/2019-M5-Comp-in-Marina-Bay-Blue-Metallic-19.jpg",
      },
      name: "BMW M5",
      para: "The M5 Competition xDrive Sedan comes standard with M xDrive, which features adjustable 4WD, 4WD Sport, and 2WD modes for complete control. Take it to the next level with the standard M Differential and Adaptive M Suspension",
      price: "$79,900 - $90,800",
    },

    {
      id: 3,
      image:
        "https://www.topgear.com/sites/default/files/2022/08/LAMBORGHINI_URUS_PERFORMANTE_01.jpg?w=976&h=549",
      imgd: {
        imgd1:
          "https://www.topgear.com/sites/default/files/2022/08/LAMBORGHINI_URUS_PERFORMANTE_01.jpg?w=976&h=549",
        imgd2:
          "https://www.topgear.com/sites/default/files/2022/08/LAMBORGHINI_URUS_PERFORMANTE_03.jpg?w=976&h=549",
        imgd3:
          "https://www.topgear.com/sites/default/files/2022/08/LAMBORGHINI_URUS_PERFORMANTE_11.jpg?w=976&h=549",
        imgd4:
          "https://www.topgear.com/sites/default/files/2022/08/LAMBORGHINI_URUS_PERFORMANTE_INTERIOR_01.jpg?w=976&h=549",
        imgd5:
          "https://www.topgear.com/sites/default/files/2022/08/LAMBORGHINI_URUS_PERFORMANTE_08.jpg?w=976&h=549",
      },
      name: "Lamborghini Urus",
      para: "Lamborghini offers the SUV in a 5-seater configuration. The Urus is powered by a 4.0-litre twin-turbo V8 engine (650PS/850Nm), mated to an 8-speed automatic. It can complete the 0-100kmph run in 3.6 seconds and has a top speed of 305kmph.",
      price: "$221,506",
    },
    {
      id: 4,
      image:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i.Bj4m.V11iQ/v1/-1x-1.jpg",
      imgd: {
        imgd1:
          "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i.Bj4m.V11iQ/v1/-1x-1.jpg",
        imgd2:
          "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioahon6ENZJU/v1/800x-1.jpg",
        imgd3:
          "https://cdn.motor1.com/images/mgl/oVn42/s3/bentley-flying-spur.webp",
        imgd4:
          "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ijVfBx4E5v9Y/v1/800x-1.jpg",
        imgd5:
          "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iqbtYM8miMvA/v1/800x-1.jpg",
      },
      name: "Bentley’s New Flying Spur",
      para: "Bentley has unveiled the Black Edition of the Flying Spur V8 S. It comes with a host of cosmetic enhancements. On the outside the headlamps and tail lamps have dark tint and black bezels, while the window surrounds, radiator, door handle inserts and headlight washer caps are garnished with glossy black finish.",
      price: "$198,725 - $219,425",
    },

    {
      id: 5,
      image:
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/1-audi-a5-coupe-2020-uk-fd-hero-front.jpg?itok=mzHeE39K",
      imgd: {
        imgd1:
          "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/1-audi-a5-coupe-2020-uk-fd-hero-front.jpg?itok=mzHeE39K",
        imgd2:
          "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/3-audi-a5-coupe-2020-uk-fd-hero-rear.jpg?itok=jySG8Paz",
        imgd3:
          "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/4-audi-a5-coupe-2020-uk-fd-nose.jpg?itok=cojgQPl2",
        imgd4:
          "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/10-audi-a5-coupe-2020-uk-fd-cabin.jpg?itok=LtE0rQLJ",
        imgd5:
          "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/18-audi-a5-coupe-2020-uk-fd-otr-nose.jpg?itok=nBx67qyk",
      },
      name: "Audi A5 Coupe 40 TFSI 2020",
      para: "Given this generation of the A5 Coupé has only been around since 2016, you can understand why the firm hasn’t felt the need to force a design revolution, especially as Audi has long traded on pushing premium feel through restrained design. Certainly, unless you have particularly strong feelings about ventilation slits above grilles",
      price: "$42,400 - $44,500",
    },
    {
      id: 6,
      image:
        "https://www.topgear.com/sites/default/files/2022/04/P90457429_highRes.jpg?w=976&h=549",
      imgd: {
        imgd1:
          "https://www.topgear.com/sites/default/files/2022/04/P90457429_highRes.jpg?w=976&h=549",
        imgd2:
          "https://www.topgear.com/sites/default/files/2022/04/P90457447_highRes.jpg?w=976&h=549",
        imgd3:
          "https://www.topgear.com/sites/default/files/2022/04/P90457468_highRes.jpg?w=976&h=549",
        imgd4:
          "https://www.topgear.com/sites/default/files/2022/04/P90457475_highRes.jpg?w=976&h=549",
        imgd5:
          "https://www.topgear.com/sites/default/files/2022/04/P90457459_highRes.jpg?w=976&h=549",
      },
      name: "BMW X7 2022 ",
      para: "BMW X7 is a 6 seater SUV available in a price range of ₹ 1.18 - 1.78 Crore. It is available in 4 variants, 2993 to 2998 cc engine options and 1 transmission option : Automatic (TC). Other key specifications of the X7 include a Ground Clearance of 221 mm, Kerb Weight of 2445 kg and Bootspace of 326 litres.",
      price: "$74,900 - $141,300  ",
    },
    {
      id: 7,
      image:
        "https://www.topgear.com/sites/default/files/cars-car/carousel/2018/03/mustang_lightning_blue_009.jpg?w=976&h=549",
      imgd: {
        imgd1:
          "https://www.topgear.com/sites/default/files/cars-car/carousel/2018/03/mustang_lightning_blue_009.jpg?w=976&h=549",
        imgd2:
          "https://www.topgear.com/sites/default/files/cars-car/carousel/2018/03/mustang_lightning_blue_012.jpg?w=976&h=549",
        imgd3:
          "https://www.topgear.com/sites/default/files/cars-car/carousel/2018/03/mustang_lightning_blue_010.jpg?w=976&h=549",
        imgd4:
          "https://www.topgear.com/sites/default/files/cars-car/carousel/2018/03/mustang_lightning_blue_019.jpg?w=976&h=549",
        imgd5:
          "https://www.topgear.com/sites/default/files/cars-car/carousel/2018/03/mustang_lightning_blue_013.jpg?w=976&h=549",
      },
      name: "Ford Mustang",
      para: "The Petrol engine is 4951 cc . It is available with Automatic transmission. Depending upon the variant and fuel type the Mustang has a mileage of 13.0 kmpl & Ground clearance of Mustang is 137mm. The Mustang is a 4 seater 8 cylinder car and has length of 4784mm, width of 2080mm and a wheelbase of 2720mm.",
      price: "$27,155 - $32,970",
    },
    {
      id: 8,
      image:
        "https://www.topgear.com/sites/default/files/2022/01/1-Mercedes-G-Class.jpg?w=976&h=549",
      imgd: {
        imgd1:
          "https://www.topgear.com/sites/default/files/2022/01/1-Mercedes-G-Class.jpg?w=976&h=549",
        imgd2:
          "https://www.topgear.com/sites/default/files/2021/09/2%20Mercedes%20G-Class%20400%20d.jpg?w=976&h=549",
        imgd3:
          "https://www.topgear.com/sites/default/files/2021/09/16%20Mercedes%20G-Class%20400%20d.jpg?w=976&h=549",
        imgd4:
          "https://www.topgear.com/sites/default/files/2021/09/9%20Mercedes%20G-Class%20400%20d.jpg?w=976&h=549",
        imgd5:
          "https://www.topgear.com/sites/default/files/2021/09/18%20Mercedes%20G-Class%20400%20d.jpg?w=976&h=549",
      },
      name: "Mercedes-Benz G-Class ",
      para: "Mercedes-Benz G-Class informationMercedes-Benz G-Class attains a max speed of 100 kmph in 7.4 seconds from standstill. The acceleration of G-Class Automatic (TC) Diesel version is 7.4. The acceleration of G-Class Automatic (TC) Petrol version is 4.5. G-Wagon is a four-wheel drive automobile manufactured by Magna Steyr ",
      price: "$131,750 - $156,450",
    },

    {
      id: 9,
      image:
        "https://www.topgear.com/sites/default/files/2022/01/wrangler80thwales45-60f97bbcbcfea.jpeg?w=976&h=549",
      imgd: {
        imgd1:
          "https://www.topgear.com/sites/default/files/2022/01/wrangler80thwales45-60f97bbcbcfea.jpeg?w=976&h=549",
        imgd2:
          "https://www.topgear.com/sites/default/files/2022/01/wrangler80thwales52-60f97c31e613b.jpeg?w=976&h=549",
        imgd3:
          "https://www.topgear.com/sites/default/files/2022/01/wrangler80thwales19-60f97ad3e495c.jpeg?w=976&h=549",
        imgd4:
          "https://www.topgear.com/sites/default/files/2022/01/wrangler80thwales8-60f97a3c0ae8a.jpeg?w=976&h=549",
        imgd5:
          "https://www.topgear.com/sites/default/files/2022/01/wrangler80thwales21-60f97c7fec898.jpeg?w=976&h=549",
      },
      name: "Jeep Wrangler",
      para: " Jeep Wrangler is a 5 seater SUV is available in 2 variants, a 1998 cc, BS6 and a single Automatic transmission. Other key specifications of the Wrangler include a kerb weight of, ground clearance of 217mm and boot space of Liters. The Wrangler is available in 4 colours. Over 75 User reviews basis Mileage, Performance, Price and overall experience of users for Jeep Wrangler.",
      price: "$38,620 - $55,820",
    },
    {
      id: 10,
      image:
        "https://www.topgear.com/sites/default/files/images/cars-road-test/carousel/2017/07/fe1ca77f13d0f43012e1c040d8454347/rh_demon_lowres-301.jpg?w=976&h=549",
      imgd: {
        imgd1:
          "https://www.topgear.com/sites/default/files/images/cars-road-test/carousel/2017/07/fe1ca77f13d0f43012e1c040d8454347/rh_demon_lowres-301.jpg?w=976&h=549",
        imgd2:
          "https://www.topgear.com/sites/default/files/images/cars-road-test/carousel/2017/07/fe1ca77f13d0f43012e1c040d8454347/rh_demon_lowres-280.jpg?w=976&h=549",
        imgd3:
          "https://www.topgear.com/sites/default/files/images/cars-road-test/carousel/2017/07/fe1ca77f13d0f43012e1c040d8454347/rh_demon_lowres-258.jpg?w=976&h=549",
        imgd4:
          "https://i.pinimg.com/originals/f8/ce/ab/f8ceab45281080603967bd191e4b4730.jpg",
        imgd5:
          "https://www.topgear.com/sites/default/files/images/cars-road-test/carousel/2017/07/fe1ca77f13d0f43012e1c040d8454347/rh_demon_lowres-243.jpg?w=976&h=549",
      },
      name: "Dodge Challenger SRT Demon",
      para: "SRT Demon is equipped with a 6.2-liter supercharged V8 that produces 808 hp and 717 lb-ft of torque on premium gas or an even more impressive 840 hp, 770 lb-ft on racing fuel. Power is sent to the rear wheels through a specialized 8-speed automatic transmission.",
      price: "$84,995 - $86,090",
    },
    {
      id: 11,
      image:
        "https://www.topgear.com/sites/default/files/2022/06/Medium-29191-AudiS8TFSIquattro.jpg?w=976&h=549",
      imgd: {
        imgd1:
          "https://www.topgear.com/sites/default/files/2022/06/Medium-29191-AudiS8TFSIquattro.jpg?w=976&h=549",
        imgd2:
          "https://www.topgear.com/sites/default/files/2022/06/Medium-29185-AudiS8TFSIquattro.jpg?w=976&h=549",
        imgd3:
          "https://www.topgear.com/sites/default/files/2022/06/Medium-29224-AudiS8TFSIquattro.jpg?w=976&h=549",
        imgd4:
          "https://www.topgear.com/sites/default/files/2022/06/Medium-29218-AudiS8TFSIquattro.jpg?w=976&h=549",
        imgd5:
          "https://www.topgear.com/sites/default/files/2022/06/Medium-29223-AudiS8TFSIquattro.jpg?w=976&h=549",
      },
      name: "Audi S8 ",
      para: "The S8 is the mechanically-upgraded, high-performance version of the Audi A8, fitted standard with Audi's quattro all-wheel drive system, and was only offered with a short-wheelbase for the first three generations.",
      price: "$116,900 - $118,995",
    },
    {
      id: 12,
      image:
        "https://www.topgear.com/sites/default/files/cars-car/carousel/2019/10/bmw_m8_coupe_fire_red_033.jpg?w=976&h=549",
      imgd: {
        imgd1:
          "https://www.topgear.com/sites/default/files/cars-car/carousel/2019/10/bmw_m8_coupe_fire_red_033.jpg?w=976&h=549",
        imgd2:
          "https://www.topgear.com/sites/default/files/cars-car/carousel/2019/10/bmw_m8_coupe_fire_red_054.jpg?w=976&h=549",
        imgd3:
          "https://www.topgear.com/sites/default/files/cars-car/carousel/2019/10/bmw_m8_coupe_fire_red_098.jpg?w=976&h=549",
        imgd4:
          "https://www.topgear.com/sites/default/files/cars-car/carousel/2019/10/bmw_m8_coupe_fire_red_029.jpg?w=976&h=549",
        imgd5:
          "https://www.topgear.com/sites/default/files/cars-car/carousel/2019/10/bmw_m8_coupe_fire_red_066.jpg?w=976&h=549",
      },
      name: "BMW M8 Competition",
      para: "THE HIGH-PERFORMANCE M TWINPOWER TURBO 8-CYLINDER PETROL ENGINE. The powerful 4.4-litre bi-turbo engine of the BMW M8 Coupé delivers an outstanding 441 kW (600 hp) and 750 Nm of torque. A cross-bank exhaust manifold optimises the response of the M power unit, a similar design to that used in motor racing.",
      price: "$130,000 - $146,000",
    },
    {
      id: 13,
      image:
        "https://www.alainclass.com/wp-content/uploads/2022/05/2022-Range-Rover-Autobiography-BLACK-3529-2-1.jpg",
      imgd: {
        imgd1:
          "https://www.alainclass.com/wp-content/uploads/2022/05/2022-Range-Rover-Autobiography-BLACK-3529-2-1.jpg",
        imgd2:
          "https://www.alainclass.com/wp-content/uploads/2022/05/2022-Range-Rover-Autobiography-BLACK-3529-1.jpg",
        imgd3:
          "https://www.alainclass.com/wp-content/uploads/2022/05/2022-Range-Rover-Autobiography-BLACK-3529-5.jpg",
        imgd4:
          "https://www.alainclass.com/wp-content/uploads/2022/05/2022-Range-Rover-Autobiography-BLACK-3529-8.jpg",
        imgd5:
          "https://www.alainclass.com/wp-content/uploads/2022/05/2022-Range-Rover-Autobiography-BLACK-3529-13.jpg",
      },
      name: "RANGE ROVER",
      para: "The 2022 Range Rover Sport has a 2,997mm long wheelbase while its front and rear tracks measure at 1,702mm and 1,704mm respectively. The Range Rover Sport has a ground clearance of 216mm which can be raised to 281mm by selecting the off-roading mode in the SUV's Terrain Response system.",
      price: "$635,000 - $735,000 ",
    },
    {
      id: 14,
      image:
        "https://www.topgear.com/sites/default/files/2022/02/2022_NEXT-GEN_RANGER_RAPTOR_EXTERIOR_01.jpg?w=976&h=549",
      imgd: {
        imgd1:
          "https://www.topgear.com/sites/default/files/2022/02/2022_NEXT-GEN_RANGER_RAPTOR_EXTERIOR_01.jpg?w=976&h=549",
        imgd2:
          "https://www.topgear.com/sites/default/files/2022/02/2022_NEXT-GEN_RANGER_RAPTOR_EXTERIOR_17.jpg?w=976&h=549",
        imgd3:
          "https://www.topgear.com/sites/default/files/2022/02/2022_NEXT-GEN_RANGER_RAPTOR_EXTERIOR_31.jpg?w=976&h=549",
        imgd4:
          "https://www.topgear.com/sites/default/files/2022/02/2022_NEXT-GEN_RANGER_RAPTOR_RHD_INTERIOR_33.jpg?w=976&h=549",
        imgd5:
          "https://www.topgear.com/sites/default/files/2022/02/2022_NEXT-GEN_RANGER_RAPTOR_EXTERIOR_09.jpg?w=976&h=549",
      },
      name: "Ford Ranger Raptor ",
      para: "THE HIGH-PERFORMANCE M TWINPOWER TURBO 8-CYLINDER PETROL ENGINE. The powerful 4.4-litre bi-turbo engine of the BMW M8 Coupé delivers an outstanding 441 kW (600 hp) and 750 Nm of torque. A cross-bank exhaust manifold optimises the response of the M power unit, a similar design to that used in motor racing.",
      price: "$52,500 - $79,390",
    },
    {
      id: 15,
      image:
        "https://www.topgear.com/sites/default/files/2021/06/2021%20Ford%20Bronco_Drive_27.jpg?w=976&h=549",
      imgd: {
        imgd1:
          " https://www.topgear.com/sites/default/files/2021/06/2021%20Ford%20Bronco_Drive_27.jpg?w=976&h=549",
        imgd2:
          "https://www.topgear.com/sites/default/files/2021/06/2021%20Ford%20Bronco_Drive_28.jpg?w=976&h=549",
        imgd3:
          "https://www.topgear.com/sites/default/files/2021/06/2021%20Ford%20Bronco_Drive_16.jpg?w=976&h=549",
        imgd4:
          "https://www.topgear.com/sites/default/files/2021/06/2021%20Ford%20Bronco_Drive_33.jpg?w=976&h=549",
        imgd5:
          "https://www.topgear.com/sites/default/files/2021/06/2021%20Ford%20Bronco_Drive_06.jpg?w=976&h=549",
      },
      name: "Ford Bronco",
      para: "THE HIGH-PERFORMANCE M TWINPOWER TURBO 8-CYLINDER PETROL ENGINE. The powerful 4.4-litre bi-turbo engine of the BMW M8 Coupé delivers an outstanding 441 kW (600 hp) and 750 Nm of torque. A cross-bank exhaust manifold optimises the response of the M power unit, a similar design to that used in motor racing.",
      price: "$50,145 - $58,040",
    },
  ]);
});
