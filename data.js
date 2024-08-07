const users = [
    {
        type: "RESIDENTE",
        name: "Dr. Alan Larios Rojas",
        userId: "5af25737-64ca-486d-8aeb-39303fe59476"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Alejandra Angulo Rodríguez ",
        userId: "23649862-c244-4c67-8c03-fb8aa8480f93"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Alejandra Segarra Ponce",
        userId: "b1a6cf7a-dc42-44f3-ba0d-91aadc0c3d72"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Ana Belen Flores ",
        userId: "79c3b8d0-ec2c-440b-980c-6966f3fb5261"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Ana Gabriela Souza ",
        userId: "7eeb54ba-9656-48de-be55-bc11555e51c6"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Ana Isabel Ceja ",
        userId: "22a84d9f-4555-4f83-bb9c-5cb5b53c8612"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Ana Isabel Macías ",
        userId: "910d796a-1371-429b-b1dc-4c3857981224"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Ana San Juan Romero",
        userId: "3086903e-8ceb-4a6b-883e-0d634df7c5df"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Anabel Andrea Lima ",
        userId: "a8a9324e-4d9c-4305-b037-3e6780dd028c"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Andra Del Mar Terronez ",
        userId: "4b231428-17ad-48da-b64b-dc5328bc55cf"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Andrea González Cázares",
        userId: "e98cefcc-4005-45d6-bcf8-9ff9090db4c1"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Andrea Isabel Mendez ",
        userId: "e85ce02d-934c-48bd-a0aa-0e33c23b662c"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Andrea Melissa Mendoza",
        userId: "0ed2ec5c-b761-446d-94dc-1c87a7625312"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Andrea Merino ",
        userId: "0253361b-7571-4b25-8a44-e91d6e5db841"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Angel Alfonso German ",
        userId: "5ba705ac-db87-4f11-8822-73dae3cb2d71"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Antonio Tirado ",
        userId: "9fe97a03-6636-4951-9c53-70e830406d2d"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Atziry Sarahi Urtuzuastegui ",
        userId: "dae56a4a-7744-4d24-b14c-b69da65090d9"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Axel Daniel Velazquez ",
        userId: "d7ecffcf-1198-4142-ba1e-5560c6250601"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Betzabe Quiles ",
        userId: "897a7ac5-1840-4da5-b23e-ac06b6bff749"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Blanca Olivia Sicairos ",
        userId: "494629f6-93a2-4507-a44b-9d260459e498"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Brandon Alonso Rodriguez ",
        userId: "3a9fe04f-9ca8-4528-92e8-3f2f9651d388"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Carol Martinez ",
        userId: "5c8fb4a2-7f72-4079-9de4-15587677b4ca"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Cecilia del Carmen Gacía",
        userId: "0f8037f4-3715-4e96-a35b-1b469517b948"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Cynthia Guadalupe Reyes ",
        userId: "d9c4b8cb-737d-41b2-84f4-9b2b628723e2"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Dalia Fabiola Vargas",
        userId: "d0ac2b56-521e-4ea1-a386-6af13185175b"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Daniel Zacarias Villarreal ",
        userId: "95484a8e-0657-468b-8601-08181ca28979"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Daniela Ann Reyes ",
        userId: "587a0776-03bf-4805-98d8-40ab9c578d80"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Daniela Celis Vera",
        userId: "9a0ef335-815e-42da-84b6-74ec493a7514"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Daniela Tonanzín Guzmán",
        userId: "49cb10fd-b5fa-4b9b-955f-727a69687da9"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Debanhi Kassandra Luna ",
        userId: "a8649c54-5694-4ea4-8b44-1835a3434e3d"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Diana Guadalupe Arzola ",
        userId: "9c224361-1b69-4fe3-aaca-3c53bc26ae5c"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Diana Karla Garcia ",
        userId: "a36709be-122b-4525-80af-9265fb7a1c9e"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Diana Miroslava Zamora ",
        userId: "55257055-e4e9-4b58-8193-6069a2928d04"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Diana Morales ",
        userId: "f45141d7-b28f-4742-8e97-2b74511f9b9e"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Diego Fernando De Santiago",
        userId: "f9cdc01b-161f-460c-abc3-e72393764f08"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Edgar Medina",
        userId: "247163a2-84bd-464b-97df-776982e7a55f"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Edwin Daniel Maldonado ",
        userId: "295db2ae-ee0d-46b9-8cee-162be1387c1c"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Elizabeth Campillo ",
        userId: "faa87345-4ccc-4791-b3b5-0689a1ebed9a"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Erick Valero ",
        userId: "f0555ffd-da2b-46a7-90e3-25fb21f16a8e"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Fabiola Lumbán ",
        userId: "119180be-2440-42e3-98f5-0a5f7ca55bf0"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Fátima Yadira Márquez ",
        userId: "82f9af5d-791d-42d8-a20a-506aff5fce8e"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Felix Refugio Hernández ",
        userId: "1a10cc5f-e24b-4fd1-9392-668e9f798c53"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Francisco Javier Álvarez ",
        userId: "1a86907f-e355-47ab-81b2-5b83ddfefa17"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Gabriela Rigel Arce ",
        userId: "3d0ebab0-682b-4364-9e12-d292459253c7"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Germán Juanicotena",
        userId: "ce97be29-f557-4679-93cc-83f92d1aea42"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Gerardo González ",
        userId: "8d9e8586-e27b-4597-8b87-2bdcd59029ef"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Gerardo RodrÍguez ",
        userId: "2b89bb69-462d-4590-87fc-d5871733632d"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Gladys Janet Peña ",
        userId: "1a287c14-7f46-4904-90b6-9a013adbade6"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Honey Paola Meneses ",
        userId: "f230ace8-bd7e-42de-857d-38967b84d1fb"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Ilse Yolanda Osorio ",
        userId: "df7b2aa7-e4d8-4de6-aff5-5eb17cab0d9f"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Iván Montesinos Jiménez",
        userId: "8690b91d-d3da-434e-851c-bd02e9d4d9eb"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Jessica Aylin Moreno ",
        userId: "1ec30f81-a5da-4a6d-a7f9-78992c755918"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Jesús Leonel Sarabia ",
        userId: "2fac0cf8-31b9-4f8c-9bcb-48f3a89702e2"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Jorge Alberto Gonzalez ",
        userId: "ab0d8441-a40d-425a-8000-dc3a5d8f4740"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Jorge Alberto Reyes ",
        userId: "703b2ea1-c899-4261-918e-ffb14d58818c"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Jorge Alexis Aceves ",
        userId: "519aaa35-53f9-45d1-952d-15e27f8a19ce"
    },
    {
        type: "RESIDENTE",
        name: "Dr. José De Jesús Valles ",
        userId: "9c0cf4e3-f1f9-44e1-a2d0-0c9dda7511df"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Judith Fernanda Nava",
        userId: "8e8129fe-db4b-471c-8251-4e5f13e5ca12"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Judith Monserrat Corona ",
        userId: "b8490151-3086-4fc3-b581-ee22618637d2"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Julio César Aguilar ",
        userId: "f1396325-1749-4b4a-8758-e52e95cd7012"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Julio Cesar De La Torre ",
        userId: "d7ae5240-bf72-42b8-8c33-40c9f65662c4"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Karen Lorena López- Aguado ",
        userId: "46ca43de-86f3-4717-ae38-76b283c0a2bf"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Karla Fonseca ",
        userId: "780b3e8e-7991-47be-bfe7-0b5be74deb32"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Karla Paola Delgado ",
        userId: "329bce63-50ac-4591-89fe-878571d6686e"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Karla Victoria Muñoz ",
        userId: "aecae9e6-73cb-4333-82de-0d9082e29ec0"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Larisa Maleny Rentería ",
        userId: "e4a76db4-0863-4de4-8722-01f4ad26267b"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Larissa Michelle Navarro ",
        userId: "71603b40-d2c0-4982-8db3-486dabf80c81"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Laura Cristhell Contreras ",
        userId: "138ccb22-9f63-43a6-9e8b-3fc9ad8fa3a4"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Linda Fernández ",
        userId: "41a313b1-571a-48ef-8dfb-bace7cf758b5"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Lorena Guadalupe Moreno",
        userId: "376bd082-0921-408b-811e-35cfd5db5647"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Lucía Alejandra Berlanga ",
        userId: "6796d36a-1620-4e3f-96b9-3eca8bcb2489"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Luis Angel Yamallel ",
        userId: "2a595031-0804-445d-af0b-5609a64286f9"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Luis David Segundo ",
        userId: "f3439f7b-6db6-4a8b-932e-def3906c7ab5"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Luis Gerardo Cruz ",
        userId: "7b81de38-4025-4440-9074-8ad2b4404f6b"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Maria Alejandra Chacón ",
        userId: "0416b9e6-c2df-48c4-83f7-638695c4a0bf"
    },
    {
        type: "RESIDENTE",
        name: "Dra. María Claret Chávez ",
        userId: "48bc3949-2db2-440c-acdc-4bbb2cbe1399"
    },
    {
        type: "RESIDENTE",
        name: "Dra. María Fernanda Pérez",
        userId: "a90de2d5-4eff-499a-9ee3-fd021dc26757"
    },
    {
        type: "RESIDENTE",
        name: "Dra. María Fernanda Torres ",
        userId: "d120e8ca-b74f-4169-8318-8fc62a393ae0"
    },
    {
        type: "RESIDENTE",
        name: "Dra. María Fernanda Uehara ",
        userId: "a81b4f86-d402-4923-b6c9-db90e88838c0"
    },
    {
        type: "RESIDENTE",
        name: "Dra. María Marcela Morán ",
        userId: "c31740db-7f0e-432e-b73e-243cbad693d5"
    },
    {
        type: "RESIDENTE",
        name: "Dra. María Xosé Arroyo ",
        userId: "043867a6-518f-48a2-a186-bd8c40c90af6"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Marian Guadalupe Escribano ",
        userId: "f178d733-6b31-4ca2-9fb3-4816eaf0202e"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Mariana Campos ",
        userId: "3e7e39cd-c0b7-4c65-adce-2d47f8ad0d07"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Mariana Del Carmen De La Vega ",
        userId: "3c446b49-b7db-419d-8d01-660f3bb3e726"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Marysol Macedo ",
        userId: "05078eb3-856d-48f1-914f-ed93948b3646"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Mayra Alejandra Reyes ",
        userId: "55a6b3f4-fa8a-4cdf-a371-e6cc0b9ad8ef"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Melissa Lomelí ",
        userId: "53d3f405-f0fd-4ae5-88ac-e68f422e9890"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Michelle Alcocer ",
        userId: "81ae642c-5b9d-41bf-a5df-35a7cd011847"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Miroslava Villarreal ",
        userId: "312352d6-843f-42bb-9939-d91e437b1166"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Mónica María Manzanares ",
        userId: "0825431a-1a2e-4de7-867e-2b1823b73eda"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Nishdaly Rodríguez ",
        userId: "45f5f8af-fde5-4f00-a27b-1d1e8ae5af9b"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Omar Adrian Mondragón ",
        userId: "8527ba83-b70b-4652-bc01-96846e029cce"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Omar Daniel Falcon ",
        userId: "48fc7838-2d44-4d9d-8ac9-90fb642bcb80"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Pablo León ",
        userId: "4baf0b36-6127-4534-b781-87bc699a3242"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Paola García ",
        userId: "84709249-a882-468e-b71d-fbb6b62262d4"
    },
    {
        type: "RESIDENTE",
        name: "Dr. Raúl Arteaga",
        userId: "e0dae432-b6c4-4e56-b75c-1d27855d02d0"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Rosal Valenzuela ",
        userId: "b7eaf2a7-dfc9-45ac-b6b3-b225c20b70da"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Roxana Stephanie García ",
        userId: "9e77922b-d07a-4b7b-a4e0-c4d8304da1e9"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Rubi Losoya ",
        userId: "d912598a-d226-423c-b956-84a827f62bba"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Sandra Paulina Enríquez ",
        userId: "c71e4cf9-c6cf-4153-b2ac-6025ff1981b3"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Sara González ",
        userId: "5a71b172-7d7d-4299-95f6-6f612bf160b9"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Silvia Lizbeth Hernández",
        userId: "e82795f7-c412-4838-8d08-082d8da41118"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Stefania Montero ",
        userId: "bf0a37d2-b9ac-43bb-81c2-f550e00dbc5d"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Tania Areli Sornoso",
        userId: "b7e77078-4174-4b46-b4c1-a719d93055d4"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Valeria Carrillo ",
        userId: "88a6d2a0-1dad-47d7-ba33-0cbbcf1c0f5c"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Vanessa González",
        userId: "f37abe0f-1a1c-40ad-be03-bf4206b6a587"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Verónica Alexandra Hernández ",
        userId: "ff0daff8-7245-445a-ba34-179fe4cf0600"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Wendoline Almeida ",
        userId: "4a338a1d-bb52-4574-bf8d-4161b2f87dc6"
    },
    {
        type: "RESIDENTE",
        name: "Dra. Yuvitza Ortiz ",
        userId: "894b298e-6a7c-4022-a4c4-3924f3eeed0d"
    },
    {
        type: "PROFESOR",
        name: "Dr. Daniel Asz Sigall",
        userId: "ed33f0a4-12c7-40c7-8ff1-e3223c2c191d"
    },
    {
        type: "PROFESOR",
        name: "Dr. Gerardo Silva Siwady",
        userId: "ea9a469e-6afe-41e4-bfae-f2a39f443c26"
    },
    {
        type: "PROFESOR",
        name: "Dr. Armando Medina Bojorquez",
        userId: "6b2a35ce-2114-4be9-a314-58d4a9003bbf"
    },
    {
        type: "PROFESOR",
        name: "Dr. Daniel Alcalá Pérez",
        userId: "6eea03e6-ab90-4e88-ae38-b177e382a574"
    },
    {
        type: "PROFESOR",
        name: "Dr. Francisco Pérez Atamoros ",
        userId: "9987f9bb-daec-4109-8b57-9f436da35cb9"
    },
    {
        type: "PROFESOR",
        name: "Dr. Fritz Cajuste",
        userId: "b8f8e7b7-92ca-4e3a-a2fd-b0b31ecfaa95"
    },
    {
        type: "PROFESOR",
        name: "Dr. Jorge Moreno González",
        userId: "fe5fb181-caa3-45c5-af22-95ee875e4271"
    },
    {
        type: "PROFESOR",
        name: "Dr. Jorge Ocampo Candiani ",
        userId: "19d399c0-7f49-4ca5-a18a-7f2bb22fc785"
    },
    {
        type: "PROFESOR",
        name: "Dr. Jorge Ocampo Garza",
        userId: "cb9c7207-2ae5-4b66-bc77-6c25679b1800"
    },
    {
        type: "PROFESOR",
        name: "Dr. Leo Velázquez",
        userId: "890c5c82-be29-461e-96a0-9846535225d6"
    },
    {
        type: "PROFESOR",
        name: "Dr. Luis Sánchez Dueñas",
        userId: "011288fc-1746-43a7-a3d6-20af51b54f88"
    },
    {
        type: "PROFESOR",
        name: "Dr. Osvaldo Vázquez",
        userId: "11ffb7d3-b9ff-4a1d-80cf-d835b48fcba9"
    },
    {
        type: "PROFESOR",
        name: "Dr. Ricardo Galván García",
        userId: "014297bc-9044-4959-b8c6-6fcf9faa92d0"
    },
    {
        type: "PROFESOR",
        name: "Dra. Ángela Rosales ",
        userId: "ab2d6c9a-d7b6-44c6-b5eb-ee13c2b3387e"
    },
    {
        type: "PROFESOR",
        name: "Dra. Judith Domínguez Cherit",
        userId: "1bccfda7-4579-42a6-8ccc-77697061eac1"
    },
    {
        type: "PROFESOR",
        name: "Dra. María Ivonne Arellano Mendoza",
        userId: "8de49f21-d36d-42df-a1ee-768e4ae6c3ec"
    },
    {
        type: "PROFESOR",
        name: "Dra. Sonia Chávez Álvarez",
        userId: "b8d21dcb-c58a-43cc-afeb-ed5176c7be4b"
    },
    {
        type: "PROFESOR",
        name: "Dra. Daniela Gutiérrez ",
        userId: "b7a0d5c5-bc0d-48ba-aee4-740fa6909a16"
    },
    {
        type: "PROFESOR",
        name: "Dra. Gabriela Ortega Gutiérrez ",
        userId: "9b491d82-f2ec-4487-8441-4863bc9e216c"
    },
    {
        type: "PROFESOR",
        name: "Dra. Mónica Ramos Álvarez",
        userId: "854f1e26-611f-41a2-a8b0-542bcefdc317"
    },
    {
        type: "PROFESOR",
        name: "Dra. Olga Labastida Gómez",
        userId: "376ffb0f-6f94-4faa-aa2e-f2bdbb21d278"
    },
    {
        type: "PROFESOR",
        name: "Dra. Paola Castañeda Gameros ",
        userId: "b7c6e437-b1b7-4aba-b165-ff4f297a8733"
    },
    {
        type: "PROFESOR",
        name: "Dra. Rosa María Ponce Olivera",
        userId: "71df1be5-d311-4118-98e8-535e128cf121"
    },
    {
        type: "STAFF",
        name: "Adriana Carolina Celis ",
        userId: "98aa17f8-5989-4b3c-8c89-58cb6a7e1c4d"
    },
    {
        type: "STAFF",
        name: "Adriana Jiménez Pacheco",
        userId: "787d784d-67d3-4948-b42c-1c1a0e505c3d"
    },
    {
        type: "STAFF",
        name: "Alejandra Ayala ",
        userId: "8998e95f-9838-44e3-97d3-005ef258f7aa"
    },
    {
        type: "STAFF",
        name: "Armida Martinez ",
        userId: "930c9706-2f09-4a35-aefa-c2db242b51d1"
    },
    {
        type: "STAFF",
        name: "Azael Luna",
        userId: "6122a5ef-d1d3-4280-b261-59916abd929c"
    },
    {
        type: "STAFF",
        name: "Bertha Hernández ",
        userId: "5e9d96d4-83f9-4827-93f0-6a9ed73af6c2"
    },
    {
        type: "STAFF",
        name: "Catalina Hernández ",
        userId: "06712b5c-1571-4c56-ba28-b78c8b426650"
    },
    {
        type: "STAFF",
        name: "Claudia Mariana Pérez ",
        userId: "86c71ccb-0ba3-42ad-b557-a444416c4479"
    },
    {
        type: "STAFF",
        name: "Daniel Delgado ",
        userId: "5c19d79c-00b7-4171-a9fb-59c08a5f0ddb"
    },
    {
        type: "STAFF",
        name: "David Rodríguez ",
        userId: "21f5f1c5-61ee-4f3c-9eda-39a3451ae8b4"
    },
    {
        type: "STAFF",
        name: "Diana Garza",
        userId: "4e30a459-9116-487a-ad0a-93df17253443"
    },
    {
        type: "STAFF",
        name: "Diana Puga ",
        userId: "f1db3ec5-5e44-4066-be63-9c7a54b208a1"
    },
    {
        type: "STAFF",
        name: "Edgar Jiménez ",
        userId: "567f2cf3-81a7-40ee-b7f6-6ee05529eae2"
    },
    {
        type: "STAFF",
        name: "Germán Callejas ",
        userId: "d917c777-b9f5-4d40-ac6c-1399b2158c9d"
    },
    {
        type: "STAFF",
        name: "Jessica Reyes",
        userId: "e5c3e641-7c34-4c79-893c-07f4d1b093a7"
    },
    {
        type: "STAFF",
        name: "Jorge Cecilio Gutiérrez ",
        userId: "69ba639c-64ec-4512-a283-2654b68f2405"
    },
    {
        type: "STAFF",
        name: "Lucia Plasencia",
        userId: "8cd2aef2-83fb-41ff-bb25-bc8892256360"
    },
    {
        type: "STAFF",
        name: "Marco Antonio Melgoza ",
        userId: "4c7ae3b3-421b-44dd-8877-29d28a6f4995"
    },
    {
        type: "STAFF",
        name: "María Di Césare ",
        userId: "9ea035af-4aa2-4091-813f-be46ec1161fc"
    },
    {
        type: "STAFF",
        name: "María Esther Radilla ",
        userId: "7ef9fba5-ad87-4d34-aca3-0c22064bf97a"
    },
    {
        type: "STAFF",
        name: "Miroslava Perea ",
        userId: "8266c505-33ab-4c98-8c03-af3e54a7d632"
    },
    {
        type: "STAFF",
        name: "Monica Martinez ",
        userId: "b340b49b-2457-421b-861d-2fa2d5a81f4a"
    },
    {
        type: "STAFF",
        name: "Nancy Noemi Cuenca ",
        userId: "41b30727-9b49-4321-afed-6a9254511596"
    },
    {
        type: "STAFF",
        name: "Roberto Carlos Barajas ",
        userId: "f7a23acb-6607-4841-927b-6d1b97e8be5f"
    },
    {
        type: "STAFF",
        name: "Susana Marquez ",
        userId: "09d7d716-5df3-4b82-823e-2bb9bba5d1c7"
    },
    {
        type: "STAFF",
        name: "Ximena Moreno",
        userId: "12927e32-ae05-4ff7-aed6-f66130d94f78"
    }
]

export default users;