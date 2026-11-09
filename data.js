var APP_DATA = {
  "scenes": [
    {
      "id": "0-carnival-entrance",
      "name": "Carnival Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.059688530894558056,
          "pitch": 0.14683209534485897,
          "rotation": 0,
          "target": "1-carnival-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-carnival-p1",
      "name": "Carnival P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.044878803166264,
          "pitch": 0.10200427987338223,
          "rotation": 3.141592653589793,
          "target": "0-carnival-entrance"
        },
        {
          "yaw": -1.2596141020644094,
          "pitch": 0.17143601819018706,
          "rotation": 5.497787143782138,
          "target": "2-carnival-p2"
        },
        {
          "yaw": 0.7451219366889354,
          "pitch": 0.26091642846717633,
          "rotation": 5.497787143782138,
          "target": "4-carnival-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-carnival-p2",
      "name": "Carnival P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5466196141904929,
          "pitch": 0.08012575419884982,
          "rotation": 4.71238898038469,
          "target": "5-bizarre-bar-stage"
        },
        {
          "yaw": -2.492348047310772,
          "pitch": 0.155202647287199,
          "rotation": 10.210176124166829,
          "target": "1-carnival-p1"
        },
        {
          "yaw": 2.4525653713379985,
          "pitch": 0.13961491883561372,
          "rotation": 0,
          "target": "6-queue-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-carnival-p4",
      "name": "Carnival P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.6198455841808954,
        "pitch": -0.027963058796361295,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.8521874488315104,
          "pitch": 0.03726306858121475,
          "rotation": 3.9269908169872414,
          "target": "4-carnival-p5"
        },
        {
          "yaw": -0.5146672546510196,
          "pitch": 0.22203103745462016,
          "rotation": 3.9269908169872414,
          "target": "62-maze-exit"
        },
        {
          "yaw": 2.4987420552928725,
          "pitch": 0.1820111078608626,
          "rotation": 10.995574287564278,
          "target": "6-queue-entrance"
        },
        {
          "yaw": -1.943187027559894,
          "pitch": 0.2080041117695668,
          "rotation": 0.7853981633974483,
          "target": "5-bizarre-bar-stage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-carnival-p5",
      "name": "Carnival P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2947202892561229,
          "pitch": 0.18066681829480657,
          "rotation": 0.7853981633974483,
          "target": "6-queue-entrance"
        },
        {
          "yaw": -2.8838188107428113,
          "pitch": 0.17798438253572968,
          "rotation": 2.356194490192345,
          "target": "1-carnival-p1"
        },
        {
          "yaw": -1.9182876296795293,
          "pitch": 0.09880344351661385,
          "rotation": 0,
          "target": "2-carnival-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bizarre-bar-stage",
      "name": "Bizarre Bar Stage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.13896499653940886,
        "pitch": 0.03283909530122742,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.9870939790685487,
          "pitch": 0.0947594004794503,
          "rotation": 2.356194490192345,
          "target": "62-maze-exit"
        },
        {
          "yaw": -1.6560868962851067,
          "pitch": 0.1572656042251861,
          "rotation": 7.0685834705770345,
          "target": "2-carnival-p2"
        },
        {
          "yaw": -3.0110454822336337,
          "pitch": 0.12557020010966014,
          "rotation": 5.497787143782138,
          "target": "6-queue-entrance"
        },
        {
          "yaw": 2.6635210597953147,
          "pitch": 0.16799102413972733,
          "rotation": 6.283185307179586,
          "target": "3-carnival-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-queue-entrance",
      "name": "Queue Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.017370575493778517,
        "pitch": -0.09851728590367159,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.01132390373314962,
          "pitch": 0.13129715523787766,
          "rotation": 5.497787143782138,
          "target": "7-maze-entrance"
        },
        {
          "yaw": 2.3821082904937807,
          "pitch": 0.13503040632997454,
          "rotation": 3.9269908169872414,
          "target": "4-carnival-p5"
        },
        {
          "yaw": -1.405988265947956,
          "pitch": 0.19609452941643113,
          "rotation": 0.7853981633974483,
          "target": "3-carnival-p4"
        },
        {
          "yaw": -2.0167893888433,
          "pitch": 0.107574761510838,
          "rotation": 5.497787143782138,
          "target": "5-bizarre-bar-stage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-maze-entrance",
      "name": "Maze Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.01922613655225547,
          "pitch": 0.10712695752814483,
          "rotation": 0,
          "target": "8-room-1-p1"
        },
        {
          "yaw": -2.412082520351067,
          "pitch": 0.07001994520279453,
          "rotation": 3.141592653589793,
          "target": "6-queue-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-room-1-p1",
      "name": "Room 1 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.03970417255720804,
        "pitch": 0.1399982483894444,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.16872576058903554,
          "pitch": 0.5240894451096203,
          "rotation": 4.71238898038469,
          "target": "9-room-1-p2"
        },
        {
          "yaw": 2.352913755714118,
          "pitch": 0.5271156070364533,
          "rotation": 2.356194490192345,
          "target": "7-maze-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-room-1-p2",
      "name": "Room 1 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.5732048519684092,
        "pitch": 0.18669019137408505,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.6172855644575623,
          "pitch": 0.5078833996400114,
          "rotation": 4.71238898038469,
          "target": "10-pathway-1-p1"
        },
        {
          "yaw": 2.9072891176166387,
          "pitch": 0.3700923764623898,
          "rotation": 3.141592653589793,
          "target": "8-room-1-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-pathway-1-p1",
      "name": "Pathway 1 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.1637253510156853,
        "pitch": 0.17256879759340116,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.16600509947890885,
          "pitch": 0.6318689023805906,
          "rotation": 1.5707963267948966,
          "target": "11-pathway-1-p2"
        },
        {
          "yaw": -1.8721811081211293,
          "pitch": 0.49333610504996983,
          "rotation": 3.141592653589793,
          "target": "9-room-1-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-pathway-1-p2",
      "name": "Pathway 1 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.19479978533212972,
        "pitch": 0.14864011557397916,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.19041683322253178,
          "pitch": 0.48978459474059655,
          "rotation": 1.5707963267948966,
          "target": "12-pathway-1-p3"
        },
        {
          "yaw": 1.7725523351885997,
          "pitch": 0.5648378053917114,
          "rotation": 3.141592653589793,
          "target": "10-pathway-1-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-pathway-1-p3",
      "name": "Pathway 1 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.023572078777167604,
        "pitch": 0.21950025925059968,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.07608139981841511,
          "pitch": 0.6991690423664405,
          "rotation": 6.283185307179586,
          "target": "13-pathway-1-p4"
        },
        {
          "yaw": -0.08632757278755321,
          "pitch": 0.3045789339792009,
          "rotation": 7.853981633974483,
          "target": "14-pathway-1-p5"
        },
        {
          "yaw": 1.6266613210924383,
          "pitch": 0.5210171935822103,
          "rotation": 3.141592653589793,
          "target": "11-pathway-1-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-pathway-1-p4",
      "name": "Pathway 1 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.5119150059657844,
        "pitch": 0.16796785852094587,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.7002966332295877,
          "pitch": 0.4482946036418056,
          "rotation": 1.5707963267948966,
          "target": "14-pathway-1-p5"
        },
        {
          "yaw": 1.6301184878181978,
          "pitch": 0.4808034506010639,
          "rotation": 3.141592653589793,
          "target": "12-pathway-1-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-pathway-1-p5",
      "name": "Pathway 1 P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.07196381275994668,
        "pitch": 0.3785137826825764,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.520647813523424,
          "pitch": 0.7096022300179694,
          "rotation": 3.141592653589793,
          "target": "13-pathway-1-p4"
        },
        {
          "yaw": -0.17414066744441747,
          "pitch": 0.7583297559512392,
          "rotation": 3.9269908169872414,
          "target": "15-pathway-1-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-pathway-1-p6",
      "name": "Pathway 1 P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.2394605337087441,
        "pitch": 0.2368164530303858,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.5535352797447324,
          "pitch": 0.6697799424663486,
          "rotation": 3.141592653589793,
          "target": "14-pathway-1-p5"
        },
        {
          "yaw": 0.3720639855508878,
          "pitch": 0.5962731089234055,
          "rotation": 0.7853981633974483,
          "target": "16-pathway-1-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-pathway-1-p7",
      "name": "Pathway 1 P7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.6730992956915838,
        "pitch": 0.36169730934843614,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.501906866547941,
          "pitch": 0.48217817563866916,
          "rotation": 1.5707963267948966,
          "target": "17-pathway-1-p8"
        },
        {
          "yaw": -2.6408076305507375,
          "pitch": 0.8089674284562705,
          "rotation": 2.356194490192345,
          "target": "15-pathway-1-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-pathway-1-p8",
      "name": "Pathway 1 P8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.04963021569651538,
        "pitch": 0.19012107805973955,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.5136824628919099,
          "pitch": 0.44942117881983457,
          "rotation": 3.141592653589793,
          "target": "16-pathway-1-p7"
        },
        {
          "yaw": 0.12619970223861188,
          "pitch": 0.41481853047419115,
          "rotation": 5.497787143782138,
          "target": "18-room-2-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-room-2-p1",
      "name": "Room 2 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.5006106528719148,
        "pitch": 0.23505878741931419,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.7584021120911544,
          "pitch": 0.29628938643666203,
          "rotation": 10.210176124166829,
          "target": "19-pathway-2-p1"
        },
        {
          "yaw": 2.9500139032878536,
          "pitch": 0.3554975211545788,
          "rotation": 9.42477796076938,
          "target": "17-pathway-1-p8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-pathway-2-p1",
      "name": "Pathway 2 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.982051654287278,
        "pitch": 0.31566383952233146,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.6770488455072385,
          "pitch": 0.495361232275517,
          "rotation": 3.9269908169872414,
          "target": "18-room-2-p1"
        },
        {
          "yaw": 2.286676411180193,
          "pitch": 0.6993633141387114,
          "rotation": 10.210176124166829,
          "target": "20-pathway-2-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-pathway-2-p2",
      "name": "Pathway 2 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.7860946437182292,
        "pitch": 0.268050380122542,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.0833149180969013,
          "pitch": 0.8023084185201945,
          "rotation": 3.9269908169872414,
          "target": "18-room-2-p1"
        },
        {
          "yaw": -0.41073191335011927,
          "pitch": 0.7003612573751834,
          "rotation": 1.5707963267948966,
          "target": "21-pathway-2-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-pathway-2-p3",
      "name": "Pathway 2 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.30522582653360786,
        "pitch": 0.295551857711045,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.022802102773397337,
          "pitch": 0.4541092191699576,
          "rotation": 5.497787143782138,
          "target": "22-pathway-2-p4"
        },
        {
          "yaw": -2.7741566129734796,
          "pitch": 0.6919443955227322,
          "rotation": 3.141592653589793,
          "target": "20-pathway-2-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-pathway-2-p4",
      "name": "Pathway 2 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.039722290565677554,
        "pitch": 0.10544339885278475,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.9678982668738882,
          "pitch": 0.4505544082836188,
          "rotation": 3.9269908169872414,
          "target": "21-pathway-2-p3"
        },
        {
          "yaw": -0.11970113992161124,
          "pitch": 0.04096625005486132,
          "rotation": 0,
          "target": "23-pathway-3-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-pathway-3-p1",
      "name": "Pathway 3 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.4243383442052604,
        "pitch": 0.19530619837046004,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -3.0887879567512844,
          "pitch": 0.13431284587883674,
          "rotation": 3.141592653589793,
          "target": "22-pathway-2-p4"
        },
        {
          "yaw": -0.9832640397785113,
          "pitch": 0.4387373441078992,
          "rotation": 5.497787143782138,
          "target": "24-pathway-3-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-pathway-3-p2",
      "name": "Pathway 3 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.04963021569652071,
        "pitch": 0.12789963433109364,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.64767474759741,
          "pitch": 0.46954248867775306,
          "rotation": 3.9269908169872414,
          "target": "23-pathway-3-p1"
        },
        {
          "yaw": -0.10503859472871113,
          "pitch": 0.35721291406894906,
          "rotation": 0.7853981633974483,
          "target": "25-pathway-3-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-pathway-3-p3",
      "name": "Pathway 3 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.872638601969415,
          "pitch": 0.3631975995517074,
          "rotation": 3.141592653589793,
          "target": "24-pathway-3-p2"
        },
        {
          "yaw": 0.02068824254621049,
          "pitch": 0.37948484650771874,
          "rotation": 0,
          "target": "26-pathway-3-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-pathway-3-p4",
      "name": "Pathway 3 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.01364830931654204,
        "pitch": 0.1866643311859164,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -3.0475790511254512,
          "pitch": 0.3508519092081883,
          "rotation": 3.141592653589793,
          "target": "25-pathway-3-p3"
        },
        {
          "yaw": -0.07377971694996432,
          "pitch": 0.33681050584034367,
          "rotation": 0,
          "target": "27-pathway-3-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-pathway-3-p5",
      "name": "Pathway 3 P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0905732098451075,
          "pitch": 0.2849988945160451,
          "rotation": 3.141592653589793,
          "target": "26-pathway-3-p4"
        },
        {
          "yaw": 0.05675926159885947,
          "pitch": 0.37752091438979285,
          "rotation": 0.7853981633974483,
          "target": "28-pathway-3-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-pathway-3-p6",
      "name": "Pathway 3 P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.270620902734894,
        "pitch": 0.26868690688562324,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.77056662452123,
          "pitch": 0.45753378347446905,
          "rotation": 0,
          "target": "37-speakeasy-p1"
        },
        {
          "yaw": 3.023151957441936,
          "pitch": 0.29646466183870146,
          "rotation": 3.141592653589793,
          "target": "27-pathway-3-p5"
        },
        {
          "yaw": 1.8547504155518686,
          "pitch": 0.45330815100364674,
          "rotation": 0.7853981633974483,
          "target": "29-pathway-3-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-pathway-3-p7",
      "name": "Pathway 3 P7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.1650319616030096,
        "pitch": 0.143454995263248,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.032747596594274,
          "pitch": 0.5941560560083907,
          "rotation": 8.63937979737193,
          "target": "28-pathway-3-p6"
        },
        {
          "yaw": 1.9701331639754596,
          "pitch": 0.07447732342853897,
          "rotation": 0,
          "target": "37-speakeasy-p1"
        },
        {
          "yaw": 0.2557804291079151,
          "pitch": 0.4311113633510928,
          "rotation": 0,
          "target": "30-pathway-3-p8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-pathway-3-p8",
      "name": "Pathway 3 P8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.08909969254989747,
          "pitch": 0.3252950528148304,
          "rotation": 0.7853981633974483,
          "target": "31-pathway-3-p9"
        },
        {
          "yaw": -2.746086064947143,
          "pitch": 0.36650087127243225,
          "rotation": 3.141592653589793,
          "target": "29-pathway-3-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-pathway-3-p9",
      "name": "Pathway 3 P9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.49630215696519997,
        "pitch": 0.08125436421160614,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -3.05917423642925,
          "pitch": 0.3381366270352615,
          "rotation": 3.141592653589793,
          "target": "30-pathway-3-p8"
        },
        {
          "yaw": 1.1106877878742267,
          "pitch": 0.3485058780176793,
          "rotation": 5.497787143782138,
          "target": "32-pathway-3-p10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-pathway-3-p10",
      "name": "Pathway 3 P10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.35113411838823616,
        "pitch": 0.11925776714656244,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.35539759880608734,
          "pitch": 0.36843631343421634,
          "rotation": 11.780972450961727,
          "target": "33-pathway-3-p11"
        },
        {
          "yaw": -2.297772434085287,
          "pitch": 0.3694489642741061,
          "rotation": 3.9269908169872414,
          "target": "31-pathway-3-p9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-pathway-3-p11",
      "name": "Pathway 3 P11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.6924196774741951,
        "pitch": 0.20220964235263672,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.0322124529059451,
          "pitch": 0.2792254959901683,
          "rotation": 0,
          "target": "36-mirror-maze"
        },
        {
          "yaw": -2.4786118235751395,
          "pitch": 0.2865434956006023,
          "rotation": 3.9269908169872414,
          "target": "32-pathway-3-p10"
        },
        {
          "yaw": -1.1697384553455912,
          "pitch": 0.3299321628569807,
          "rotation": 0.7853981633974483,
          "target": "34-pathway-3-p12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-pathway-3-p12",
      "name": "Pathway 3 P12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.4131715456735314,
        "pitch": 0.058764696854826326,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.9440358185894606,
          "pitch": 0.29623228393972134,
          "rotation": 3.9269908169872414,
          "target": "33-pathway-3-p11"
        },
        {
          "yaw": 0.9263010702004273,
          "pitch": 0.3168683579479623,
          "rotation": 5.497787143782138,
          "target": "35-pathway-3-p13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-pathway-3-p13",
      "name": "Pathway 3 P13",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.021093167549508962,
        "pitch": 0.050123737568384286,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.3092391209276553,
          "pitch": 0.2582870187838999,
          "rotation": 3.141592653589793,
          "target": "34-pathway-3-p12"
        },
        {
          "yaw": -3.130530171837229,
          "pitch": 0.09601154398863443,
          "rotation": 0,
          "target": "36-mirror-maze"
        },
        {
          "yaw": -0.050066707178061165,
          "pitch": 0.1967396341712444,
          "rotation": 0,
          "target": "40-pathway-4-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-mirror-maze",
      "name": "Mirror Maze",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.90581061693808,
          "pitch": 0.33052070738970407,
          "rotation": 3.141592653589793,
          "target": "33-pathway-3-p11"
        },
        {
          "yaw": 0.4624668118765314,
          "pitch": 0.23723057696392402,
          "rotation": 0,
          "target": "35-pathway-3-p13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-speakeasy-p1",
      "name": "Speakeasy P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.5820797156139221,
        "pitch": 0.17802246400139587,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.0979470241370421,
          "pitch": 0.2961932941042704,
          "rotation": 0,
          "target": "38-speakeasy-p2"
        },
        {
          "yaw": 0.12168097448060422,
          "pitch": 0.36349827586318284,
          "rotation": 0,
          "target": "39-speakeasy-p3"
        },
        {
          "yaw": -2.7208879849599406,
          "pitch": 0.29763879934547965,
          "rotation": 0,
          "target": "28-pathway-3-p6"
        },
        {
          "yaw": 1.9844461310842574,
          "pitch": 0.05875710458217043,
          "rotation": 0,
          "target": "62-maze-exit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-speakeasy-p2",
      "name": "Speakeasy P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.15013140248196777,
        "pitch": 0.13999824838943553,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.886950648612568,
          "pitch": 0.23032286679105596,
          "rotation": 9.42477796076938,
          "target": "37-speakeasy-p1"
        },
        {
          "yaw": 2.1242529660551934,
          "pitch": 0.2908875841757794,
          "rotation": 10.210176124166829,
          "target": "39-speakeasy-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-speakeasy-p3",
      "name": "Speakeasy P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.4417089196990318,
        "pitch": 0.18839270462282798,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.1691699956252215,
          "pitch": 0.27739005936220806,
          "rotation": 0.7853981633974483,
          "target": "38-speakeasy-p2"
        },
        {
          "yaw": 3.0612041626612925,
          "pitch": 0.30527710483468695,
          "rotation": 3.9269908169872414,
          "target": "37-speakeasy-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-pathway-4-p1",
      "name": "Pathway 4 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.10670496374751437,
        "pitch": 0.08296192497151722,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.064070236279571,
          "pitch": 0.30019271526995617,
          "rotation": 3.141592653589793,
          "target": "35-pathway-3-p13"
        },
        {
          "yaw": -0.47730942415621413,
          "pitch": 0.5060546570906741,
          "rotation": 3.9269908169872414,
          "target": "41-pathway-4-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-pathway-4-p2",
      "name": "Pathway 4 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.1981758139753822,
        "pitch": 0.31259424126855073,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.3662703211214708,
          "pitch": 0.5726584949002618,
          "rotation": 3.9269908169872414,
          "target": "40-pathway-4-p1"
        },
        {
          "yaw": -2.739652635066456,
          "pitch": 0.15860305612599745,
          "rotation": 5.497787143782138,
          "target": "57-pathway-4-p18"
        },
        {
          "yaw": -0.25101000987431554,
          "pitch": 0.3776911711371902,
          "rotation": 1.5707963267948966,
          "target": "42-pathway-4-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-pathway-4-p3",
      "name": "Pathway 4 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.0905751436461415,
        "pitch": 0.16419547650613353,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.504449115560547,
          "pitch": 0.4243749584656733,
          "rotation": 3.141592653589793,
          "target": "41-pathway-4-p2"
        },
        {
          "yaw": 0.06782006641023308,
          "pitch": 0.2561403667194462,
          "rotation": 11.780972450961727,
          "target": "43-pathway-4-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-pathway-4-p4",
      "name": "Pathway 4 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.33986091157961695,
        "pitch": 0.03111072186431585,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -3.0115967590971557,
          "pitch": 0.4199070146352817,
          "rotation": 3.141592653589793,
          "target": "42-pathway-4-p3"
        },
        {
          "yaw": -0.35881904617971117,
          "pitch": 0.057222401913865184,
          "rotation": 0,
          "target": "44-pathway-4-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-pathway-4-p5",
      "name": "Pathway 4 P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.1017453535011974,
        "pitch": 0.41308125142071894,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.7677851157884135,
          "pitch": 0.46764899939443083,
          "rotation": 3.141592653589793,
          "target": "43-pathway-4-p4"
        },
        {
          "yaw": 0.35558564661084624,
          "pitch": 0.7973799627338352,
          "rotation": 1.5707963267948966,
          "target": "45-pathway-4-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-pathway-4-p6",
      "name": "Pathway 4 P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.04342643873444807,
        "pitch": 0.3093788452063002,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.9348513119275284,
          "pitch": 0.6139120167831162,
          "rotation": 1.5707963267948966,
          "target": "44-pathway-4-p5"
        },
        {
          "yaw": 0.03531427158639744,
          "pitch": 0.5671087028137833,
          "rotation": 4.71238898038469,
          "target": "46-pathway-4-p7"
        },
        {
          "yaw": 1.6014326798110963,
          "pitch": 0.1574688033732876,
          "rotation": 6.283185307179586,
          "target": "52-pathway-4-p13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-pathway-4-p7",
      "name": "Pathway 4 P7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.071963812759952,
        "pitch": 0.18666433118592174,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.555153961318478,
          "pitch": 0.4228870402585585,
          "rotation": 9.42477796076938,
          "target": "45-pathway-4-p6"
        },
        {
          "yaw": 0.15325570708726488,
          "pitch": 0.2924646363126069,
          "rotation": 2.356194490192345,
          "target": "47-pathway-4-p8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-pathway-4-p8",
      "name": "Pathway 4 P8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.13772649977501317,
        "pitch": 0.1590103561954166,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.3714283412656165,
          "pitch": 0.36214327332151086,
          "rotation": 2.356194490192345,
          "target": "46-pathway-4-p7"
        },
        {
          "yaw": -0.022771608163642654,
          "pitch": 0.3296755036028287,
          "rotation": 6.283185307179586,
          "target": "48-pathway-4-p9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-pathway-4-p9",
      "name": "Pathway 4 P9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.2608976138174306,
        "pitch": 0.27509098410778776,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.7256546996558617,
          "pitch": 0.3877911117799009,
          "rotation": 2.356194490192345,
          "target": "46-pathway-4-p7"
        },
        {
          "yaw": -0.32093177772087955,
          "pitch": 0.5426536991856796,
          "rotation": 1.5707963267948966,
          "target": "49-pathway-4-p10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-pathway-4-p10",
      "name": "Pathway 4 P10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.012558400933759373,
        "pitch": 0.2653005349036732,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.6383238560272817,
          "pitch": 0.45012504520528296,
          "rotation": 3.141592653589793,
          "target": "48-pathway-4-p9"
        },
        {
          "yaw": -0.0633800486270868,
          "pitch": 0.25935770444737827,
          "rotation": 4.71238898038469,
          "target": "50-pathway-4-p11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-pathway-4-p11",
      "name": "Pathway 4 P11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.008688924552412658,
        "pitch": 0.14692187428415338,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.6235483658872667,
          "pitch": 0.4710196473934989,
          "rotation": 3.141592653589793,
          "target": "49-pathway-4-p10"
        },
        {
          "yaw": 0.05398304578508295,
          "pitch": 0.3095929499949932,
          "rotation": 4.71238898038469,
          "target": "51-pathway-4-p12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-pathway-4-p12",
      "name": "Pathway 4 P12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.6261051299571783,
        "pitch": 0.16320219185497997,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.2473729575429378,
          "pitch": 0.5118628378541654,
          "rotation": 0,
          "target": "53-pathway-4-p14"
        },
        {
          "yaw": 0.11793800176866398,
          "pitch": 0.6767985556939919,
          "rotation": 0,
          "target": "52-pathway-4-p13"
        },
        {
          "yaw": 2.963575221201454,
          "pitch": 0.2415801871654608,
          "rotation": 3.141592653589793,
          "target": "50-pathway-4-p11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-pathway-4-p13",
      "name": "Pathway 4 P13",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.2456695676977816,
        "pitch": 0.17629409056448253,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -3.0409436887341013,
          "pitch": 0.04467705205003547,
          "rotation": 1.5707963267948966,
          "target": "45-pathway-4-p6"
        },
        {
          "yaw": -2.0262469866455923,
          "pitch": 0.11084330440360901,
          "rotation": 0.7853981633974483,
          "target": "53-pathway-4-p14"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-pathway-4-p14",
      "name": "Pathway 4 P14",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.32313325713959706,
        "pitch": 0.25318723141858257,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.4449004154524987,
          "pitch": 0.24687615875616942,
          "rotation": 3.9269908169872414,
          "target": "51-pathway-4-p12"
        },
        {
          "yaw": 0.455594201343672,
          "pitch": 0.7546908451689731,
          "rotation": 2.356194490192345,
          "target": "54-pathway-4-p15"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54-pathway-4-p15",
      "name": "Pathway 4 P15",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.6154154672164438,
        "pitch": 0.22468854679787853,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.9693256950639118,
          "pitch": 0.6798133980337333,
          "rotation": 3.141592653589793,
          "target": "53-pathway-4-p14"
        },
        {
          "yaw": -0.5829169035263853,
          "pitch": 0.566155869694688,
          "rotation": 10.210176124166829,
          "target": "55-pathway-4-p16"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "55-pathway-4-p16",
      "name": "Pathway 4 P16",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.11166812529938142,
        "pitch": 0.18839270462281732,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.40199555592722724,
          "pitch": 0.6104431737162113,
          "rotation": 0.7853981633974483,
          "target": "56-pathway-4-p17"
        },
        {
          "yaw": -0.7597043817085947,
          "pitch": 0.6824131501698201,
          "rotation": 2.356194490192345,
          "target": "54-pathway-4-p15"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "56-pathway-4-p17",
      "name": "Pathway 4 P17",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.7385858290024707,
        "pitch": 0.2025029749167775,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.7044638511267447,
          "pitch": 0.6190218790857713,
          "rotation": 2.356194490192345,
          "target": "55-pathway-4-p16"
        },
        {
          "yaw": -0.6585825812606068,
          "pitch": 0.5372755923631249,
          "rotation": 4.71238898038469,
          "target": "57-pathway-4-p18"
        },
        {
          "yaw": 0.4038717022150724,
          "pitch": 0.07719480270925594,
          "rotation": 0.7853981633974483,
          "target": "41-pathway-4-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "57-pathway-4-p18",
      "name": "Pathway 4 P18",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.0024815107848255025,
        "pitch": 0.1883927046228333,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.533714318877756,
          "pitch": 0.08117757620211563,
          "rotation": 0,
          "target": "41-pathway-4-p2"
        },
        {
          "yaw": -1.5403072243887106,
          "pitch": 0.4802023262661148,
          "rotation": 3.141592653589793,
          "target": "56-pathway-4-p17"
        },
        {
          "yaw": 0.12703097672472374,
          "pitch": 0.45911819157778133,
          "rotation": 4.71238898038469,
          "target": "58-pathway-4-p19"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "58-pathway-4-p19",
      "name": "Pathway 4 P19",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.040551974937546476,
        "pitch": 0.18320758431211104,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.404989358491136,
          "pitch": 0.4601173613809202,
          "rotation": 3.141592653589793,
          "target": "57-pathway-4-p18"
        },
        {
          "yaw": 0.15970209101503485,
          "pitch": 0.45870285846197234,
          "rotation": 0,
          "target": "59-spinning-tunnel-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "59-spinning-tunnel-entrance",
      "name": "Spinning Tunnel Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.06080156637760581,
        "pitch": 0.10715915308820811,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.9419130762975279,
          "pitch": 0.14548367940992435,
          "rotation": 0,
          "target": "61-ada-path"
        },
        {
          "yaw": -0.2251245143571463,
          "pitch": 0.14419000737331267,
          "rotation": 0,
          "target": "60-spinning-tunnel"
        },
        {
          "yaw": -3.0809792404491727,
          "pitch": 0.39769963646594775,
          "rotation": 3.141592653589793,
          "target": "58-pathway-4-p19"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "60-spinning-tunnel",
      "name": "Spinning Tunnel",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.06203776962065177,
        "pitch": 0.18666433118592352,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.14929424409999115,
          "pitch": 0.17165737679728466,
          "rotation": 0,
          "target": "62-maze-exit"
        },
        {
          "yaw": -3.040434840454491,
          "pitch": 0.13508088028310183,
          "rotation": 3.141592653589793,
          "target": "59-spinning-tunnel-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "61-ada-path",
      "name": "ADA Path",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.105849609210491,
        "pitch": 0.13293687242263275,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.1117495499944567,
          "pitch": 0.30103967897994366,
          "rotation": 5.497787143782138,
          "target": "62-maze-exit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "62-maze-exit",
      "name": "Maze Exit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.14468762258817236,
          "pitch": 0.1807720293512638,
          "rotation": 5.497787143782138,
          "target": "3-carnival-p4"
        },
        {
          "yaw": 0.3478864264258821,
          "pitch": 0.08624599444199532,
          "rotation": 0.7853981633974483,
          "target": "5-bizarre-bar-stage"
        },
        {
          "yaw": 2.107024253593101,
          "pitch": 0.3036440320991005,
          "rotation": 9.42477796076938,
          "target": "61-ada-path"
        },
        {
          "yaw": 3.0498020012351432,
          "pitch": 0.02049735097139127,
          "rotation": 3.141592653589793,
          "target": "60-spinning-tunnel"
        },
        {
          "yaw": -1.3296226589892655,
          "pitch": 0.07130648360950431,
          "rotation": 0,
          "target": "37-speakeasy-p1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BIGTOP 2026",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
