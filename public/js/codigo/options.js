let text2 =
        "Chirp, a social network designed with the commitment to guarantee the security and privacy of its users, stands as a digital space where trust is essential. In an increasingly interconnected world, protecting personal information becomes essential, and Chirp proactively addresses this concern The platform uses advanced security measures to safeguard the integrity of its users data. End-to-end encryption ensures that communications between users remain confidential, protecting them from possible external threats. Additionally, we implement robust firewalls and security protocols to prevent unauthorized access and potential security breaches. Chirp prides itself on providing users with complete control over their information. With customizable privacy options, users can decide who accesses their posts and what data they share. Transparency is key, and Chirp strives to clearly report how data is used within the platform, ensuring that users are fully aware and comfortable with privacy practices.Additionally, Chirp is committed to complying with all relevant privacy regulations and standards. The platform conducts regular audits to ensure ongoing compliance with data protection standards, providing users with peace of mind that their rights and privacy are respected.In short, Chirp not only seeks to foster connection and interaction among its users, but also strives to be a bastion of security and privacy in the digital space. By prioritizing data protection and offering intuitive privacy controls, Chirp creates an online environment where users can share confidently, knowing that their security and privacy are paramount. <br> <br> <input type='checkbox' id='cbox1' value='first_checkbox' checked='checked' /> Account Public <input type='checkbox' id='cbox1' checked='checked' value='first_checkbox' />Post Publics <a id='reset_btn' class='btn btn--reset' href='#'>Change Password</a>";

      let text3 =
        "Chirp, the social network that awakens your visual senses, is presented with a distinctive aesthetic design that fuses the freshness of white with the vitality of green, creating a unique and pleasant experience for its users.The predominant white color in Chirp's interface reflects elegance, simplicity and clarity. This neutral tone not only provides a clean canvas for displaying content, but also conveys a feeling of openness and spaciousness, making the platform welcoming to users of all ages. Green, carefully integrated into select elements, adds a vibrant and energetic touch to the design. This color reflects vitality, freshness and growth, conveying the idea that Chirp is a dynamic and constantly evolving space. Additionally, green is commonly associated with nature, which can evoke a sense of harmony and balance in the user experience. The combination of white and green in Chirp is not only aesthetically appealing, but also has practical implications. The simplicity of white makes content easy to read and view, while green is used strategically to highlight buttons, notifications and interactive elements, providing an intuitive and easy-to-navigate user experience. In short, the visual aspect of Chirp, with its palette of white and green, not only seeks to aesthetically delight its users, but also to create a digital environment that is pleasant, easy to use and reflects the vitality and dynamism characteristic of this innovative network. social.";

      // let text4 =
      //  "Chirp, the social network that values your time and makes exploration easy, features an intuitive and powerful search engine that redefines the way you find content and meaningful connections. Our search engine, designed with user comfort in mind, becomes your ally to discover what really matters in the vast universe of Chirp. With a clean and easy-to-use interface, Chirp's search engine allows you to effortlessly navigate through a variety of content. Whether you're looking for friends, shared interests, or relevant conversations, our search engine adapts to your needs, giving you accurate and relevant results in seconds. In short, Chirp's search engine not only simplifies navigation on the platform, but also effectively connects you to what matters most to you. From finding old friends to discovering new communities, our search engine is designed to be your trusted guide on the exciting journey of online social interaction.";

      let text5 = "<a id='reset_btn' class='btn btn--reset' href='#'>English</a> <a id='reset_btn' class='btn btn--reset' href='#'>Español</a> <a id='reset_btn' class='btn btn--reset' href='#'>Français</a>";

      let text6 =
        "Chirp, an innovative social network, stands out for its comprehensive system that drives the user experience, providing an interactive and efficient environment. From creating profiles to engaging in meaningful conversations, our system is designed to make every interaction on Chirp seamless and rewarding. The Chirp registration process is quick and easy, allowing you to quickly log in and start exploring everything the platform has to offer. The intuitive interface easily and efficiently guides you through setting up your profile, ensuring you can customize your online presence to your preferences. Chirp's clear, hierarchical organization allows you to easily explore the various features, from the main timeline to groups, events, and direct messages. The system's intuitive navigation ensures that you're always just a few clicks away from what you're looking for, whether it's a fascinating conversation or the latest update from your friends. Chirp also prioritizes security and privacy with its data management system and customizable privacy settings. We maintain the integrity of your data and give you control over what information you share and with whom. In short, Chirp's system not only simplifies interaction on the platform, but also enhances your online social experience. With intuitive design, smart features, and a focus on security, we are committed to making every moment on Chirp meaningful and enjoyable for our users.";

      let text7 =
        "In this section you can reset the settings <a id='reset_btn' class='btn btn--reset' href='#'>Reset</a>";
      document.getElementById("Q1").addEventListener("click", function () {
        document.getElementById("Text").innerHTML = "Por definir";
      });
      document.getElementById("Q2").addEventListener("click", function () {
        document.getElementById("Text").innerHTML = text2;
      });

      document.getElementById("Q3").addEventListener("click", function () {
        document.getElementById("Text").innerHTML = text3;
      });

      // document.getElementById("Q4").addEventListener("click", function () {
        //document.getElementById("Text").innerHTML = text4;
      //});

      document.getElementById("Q5").addEventListener("click", function () {
        document.getElementById("Text").innerHTML = text5;
      });

      document.getElementById("Q6").addEventListener("click", function () {
        document.getElementById("Text").innerHTML = text6;
      });

      document.getElementById("Q7").addEventListener("click", function () {
        document.getElementById("Text").innerHTML = text7;
      });