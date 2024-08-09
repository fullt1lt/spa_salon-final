(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const $=""+new URL("../icon/logo_black.svg",import.meta.url).href,U=""+new URL("../icon/instagram_black.svg",import.meta.url).href,I=""+new URL("../icon/facebook_black.svg",import.meta.url).href,A=""+new URL("../icon/wats_up_black.svg",import.meta.url).href,R=""+new URL("../header.png",import.meta.url).href;function M(){return`
    <header class="Main_Header" style="background: url(${R}); background-repeat: no-repeat; background-size: cover; background-position: center">
      <div class="Main_Header_Substrate">
        <ul class="Main_Header_list">
          <li class="Main_Header_info">
            <ul class="Main_Header_info_list">
              <li class="Main_info_logo">
                <a href="#" class="Main_info_link" data-section="main">
                  <img src="${$}" alt="" class="logo">
                </a>
                <span class="Main_info_link">Therapy Cup Spa</span>
              </li>
            </ul>
          </li>
          <li class="Main_Header_navigation">
            <ul class="Main_Header_navigation_list">
              <li class="Navigation_list_nav">
                <ul class="navigation_list_nav_list">
                  <li class="Main_Header_navigation_item">
                      <a href="#" data-language="blogNews" data-section="headerBlogNews">Новини i блог</a>
                  </li>
                  <li class="Main_Header_navigation_item">
                      <a href="#" data-language="gallery" data-section="HeaderGallery">Фотогалерея</a>
                  </li>
                  <li class="Main_Header_navigation_item">
                      <a href="#" data-language="cafe" data-section="HeaderCafe">Кав’ярня</a>
                  </li>
                </ul>
              </li>
              <li class="Main_Header_navigation_contacts">
                <ul class="Navigation_contacts_list">
                  <li class="contacts_item"><a href="#"><img src="${I}" alt="" class="contacts_item_img"></a></li>
                  <li class="contacts_item"><a href="#"><img src="${U}" alt="" class="contacts_item_img"></a></li>
                  <li class="contacts_item"><a href="#"><img src="${A}" alt="" class="contacts_item_img"></a></li>
                </ul>
              </li>
              ${F()}
            </ul>
          </li>
          <li class="Main_Header_text">
            <ul class="Main_Header_text_list">
              <li class="Main_Header_text_item">
                <a href="#order-form-section" class="Header_Link_Sign_Up" data-language="signUp">Записатись</a>
              </li>
              <li class="Main_Header_text_item">
                <h1 data-language="spaTherapy">SPA-терапія</h1>
              </li>
              <li class="Main_Header_text_item">
                <h1 data-language="momentsOfPleasure">Подаруйте собі миті насолоди </h1>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  `}function F(){return`
    <li class="language-switcher">
        <button class="language-button">${(localStorage.getItem("language")||"uk").toUpperCase()}</button>
        <ul class="language-menu" style="display: none;">
            <li class="language-menu-item" data-lang="uk">UK</li>
            <li class="language-menu-item" data-lang="en">EN</li>
            <li class="language-menu-item" data-lang="cz">CZ</li>
        </ul>
    </li>
  `}const V="EN",J="News & Blog",Z="Photo Gallery",Y="Cafe",Q="Sign Up",X="SPA Therapy",ee="Give Yourself Moments of Pleasure",ae="Contacts",ie="About Us",ne="Welcome to our unique establishment, where every corner is filled with an atmosphere of comfort and relaxation. Here you can forget about the city noise and daily worries, immersing yourself in the world of desires and pleasure. Our mission is to give you not only pleasant moments but also to care for your well-being and health. You are a guest in our world, and we are ready to do everything for your harmony and pleasure.",te="We have created an atmosphere where you will feel special, where every sip of coffee and spa ritual will become a magical moment for you.",se="For us, every guest is unique, so we offer individual spa treatment programs and personalized coffee drinks.",oe="We offer a wide range of spa treatments, from massages to exclusive wraps, as well as various steaming and ceremonies.",re="Philosophy",le="Eco Strategies",ce="We implement environmentally friendly technologies and use natural, organic products to ensure not only the effectiveness of procedures but also safety for the environment. Our innovative solutions help reduce the impact on nature, preserving its beauty for future generations.",ge="Professional Care",me="Qualified specialists are aware of the latest trends and techniques. They understand the unique needs of the client and are always ready to provide individual recommendations and high-quality service. They work diligently to ensure you get the best results and unforgettable experiences from every visit to our spa.",pe="Individual Approach",de="Our specialists offer an individual approach to each client, considering all the characteristics of your skin and developing unique care programs tailored to your needs. This combination allows achieving the best results and ensures maximum effect from the procedures.",ue="Services",he=[{id:1,name:"Massages",description:"Our massages are a unique combination of traditional and modern techniques. From classic to Thai, sports, and aromatherapy massage, each procedure is aimed at relieving muscle tension, improving blood circulation, and overall well-being. Trust our experienced massage therapists and feel deep relaxation.",image:"./image/category/Massage.png",moreInfoUrl:"/massage.html"},{id:2,name:"Peelings",description:"Peeling is a cosmetic procedure aimed at removing the top layer of dead skin cells to improve its texture, appearance, and overall condition. The main advantage of the procedure is exfoliating the skin, which stimulates its renewal and regeneration. The choice of peeling depends on the individual needs of the skin and the expected results.",image:"./image/category/peeling.jpg",moreInfoUrl:"/peelings.html"},{id:3,name:"Steaming and Wrapping",description:"In our spa complex, we offer several types of steaming and wrapping, using only natural essential oils and herbs that enhance the effect of the procedure and provide pleasant aromas. Our professional specialists will ensure your comfort and relaxation during the procedures, taking into account all your wishes. During wrapping, special mixtures of natural components, such as seaweed, clay, honey, chocolate, or essential oils, are applied to the body, and then the body is wrapped in foil or special fabrics.",image:"./image/category/baths.jpg",moreInfoUrl:"/steaming_wrapping.html"},{id:4,name:"Ceremonies",description:"Ceremonies contribute to physical and emotional healing and create a unique atmosphere where you can feel harmony with yourself and the surrounding world. They help you pause, relax, and enjoy the moment, forgetting about stress and worries. Visiting our ceremonies will provide not only physical relaxation but also spiritual renewal, helping you feel happier and healthier.",image:"./image/category/caption.jpg",moreInfoUrl:"/ceremonies.html"}],ye="Learn More",_e="Specialists",fe=[{id:1,name:"Oksana Kovalenko",role:"Administrator",image:"./image/therapist/admin.png"},{id:2,name:"Anna Herasymenko",role:"Masseuse",image:"./image/therapist/Anna.png"},{id:3,name:"Oleksandr Shevchenko",role:"Masseur, Bath Attendant",image:"./image/therapist/Alex.png"},{id:4,name:"Mariya Kovalchuk",role:"Masseuse",image:"./image/therapist/Mari.png"},{id:5,name:"Ivan Honcharenko",role:"Masseur, Bath Attendant",image:"./image/therapist/Ivan.png"},{id:6,name:"Olena Boyko",role:"Masseuse",image:"./image/therapist/Elena.png"},{id:7,name:"Dmytro Sydorenko",role:"Masseur, Bath Attendant",image:"./image/therapist/Dmitry.png"},{id:8,name:"Tetyana Melnyk",role:"Masseuse",image:"./image/therapist/Tanya.png"},{id:9,name:"Andriy Petrovskiy",role:"Masseur, Bath Attendant",image:"./image/therapist/Andriy.png"}],ve="Why Us?",ke="Quality",be="Our spa ensures the highest quality of services thanks to qualified specialists, a personalized approach, and the use of the latest technologies and organic products.",we="Effectiveness",je="The effectiveness of our spa treatments lies in the combination of advanced techniques, individually tailored programs, and carefully selected products that guarantee long-lasting and noticeable results.",Te="Safety",$e="The safety of our spa is ensured by adhering to the highest hygiene standards, using environmentally friendly products, and strict quality control of procedures.",Se="Order",Ce="You can book our services by leaving your details",Me="Your name",xe="Your email",ze="Your phone",He=["Blog","News"],Pe={mainBlogHeader:"Life in harmony with yourself: Blog and News of our SPA-salon",mainBlogText:"In our blog and news section, you will find the latest self-care tips, insights into the art of relaxation, and all the most interesting news from the life of our SPA-salon. Share your thoughts and impressions with us, learn and discover more about the world of beauty and harmony with our expert team."},De=[{id:1,blogHeader:"Benefits of Regular SPA Visits",blogMainImg:"./image/blogNews/blog_main_1.png",blogDescription:"Stress Relief and Relaxation: How regular procedures help reduce stress levels and improve overall health. Skin rejuvenation: The role of peels, masks, and wraps in maintaining skin health and beauty.",blogtextImg:"./image/blogNews/blog_small_image_1.png"},{id:2,blogHeader:"Types of Massages and Their Benefits",blogMainImg:"./image/blogNews/blog_main_2.png",blogDescription:"Lymphatic Drainage Massage: How it helps reduce swelling and improve lymph circulation. Swedish massage: Basic techniques and benefits for the body. Thai massage: Traditional methods and their impact on the body.",blogtextImg:"./image/blogNews/blog_small_image_2.png"},{id:3,blogHeader:"Peelings: How to Choose the Best",blogMainImg:"./image/blogNews/blog_main_3.png",blogDescription:"Salt Scrub: Benefits and effectiveness in removing dead cells. Coffee scrub: How caffeine stimulates and rejuvenates the skin. Sugar scrub: A gentle and effective way to cleanse the skin.",blogtextImg:"./image/blogNews/blog_small_image_3.png"}],Ue=[{id:1,blogHeader:"Special Offer: Discount on Couple Visits",blogMainImg:"./image/blogNews/news_main_1.png",blogDescription:"In June, we launch a special offer for couples: 20% discount on all couple procedures! Come with your loved one and enjoy unforgettable moments of relaxation.",blogtextImg:"./image/blogNews/news_small_image_1.png"},{id:2,blogHeader:"Summer Peeling Promotion",blogMainImg:"./image/blogNews/news_main_2.png",blogDescription:"During the summer season, it is especially important to take care of your skin. That's why we offer a 30% discount on all types of peels! Don't miss the opportunity to make your skin smooth and radiant.",blogtextImg:"./image/blogNews/news_small_image_2.png"},{id:3,blogHeader:"Special Offer for New Clients",blogMainImg:"./image/blogNews/news_main_3.png",blogDescription:"For all new clients of our SPA-salon, there is a special offer: 50% discount on the first visit. Take advantage of this opportunity and discover the world of luxurious relaxation.",blogtextImg:"./image/blogNews/news_small_image_3.png"}],Ie=["Desserts","Coffee","Special Offers","Teas"],Ae={mainCafeHeader:"Welcome to our coffee shop at the SPA-salon!",mainCafeText:"Immerse yourself in the feeling of luxury and satisfaction, enjoy aromatic coffee in the cozy atmosphere of our establishment. In our coffee shop, you can enjoy a wide selection of freshly roasted coffee beans, the best tea varieties, and appetizing desserts - all this for your relaxation and pleasure. Visit us today and treat yourself to moments of enjoyment and relaxation!"},Le=[{id:1,name:"Cheesecake 'Berry Fantasy'",price:"3 USD",ingredients:"Ingredients: mascarpone cheese, biscuit base, berry sauce with blueberry and raspberry.",description:"Description: Delicate cheesecake with a refreshing berry sauce.",image:"./image/cafe/chiscake.png"},{id:2,name:"Cake 'Lemon Delight'",price:"2.70 USD",ingredients:"Ingredients: lemon cream, shortcrust pastry, meringue.",description:"Description: Light lemon cake with crispy shortcrust pastry and delicate meringue.",image:"./image/cafe/lemon_cake.png"},{id:3,name:"Chocolate Fondant",price:"3.30 USD",ingredients:"Ingredients: dark chocolate, butter, eggs, sugar.",description:"Description: Hot dessert with a liquid chocolate filling, a true paradise for chocolate lovers.",image:"./image/cafe/Chocolate_fondant.png"}],Ne=[{id:1,name:"Espresso 'Creamy Chocolate'",price:"1.90 USD",ingredients:"Ingredients: freshly roasted Arabica beans, dark chocolate, cream.",description:"Description: An intense espresso with added dark chocolate and cream for a smooth taste.",image:"./image/cafe/espresso.png"},{id:2,name:"Latte 'Caramel Delight'",price:"2.40 USD",ingredients:"Ingredients: espresso, milk, caramel syrup.",description:"Description: A soft latte with sweet caramel notes, making it ideal for any time of the day.",image:"./image/cafe/Latte.png"},{id:3,name:"Cappuccino 'Vanilla Heaven'",price:"2.20 USD",ingredients:"Ingredients: espresso, milk, vanilla syrup.",description:"Description: Classic cappuccino with added vanilla syrup for a refined taste.",image:"./image/cafe/cappuccino.png"}],Be=[{id:1,name:"Sweet Breakfast",price:"5 USD",ingredients:"Ingredients: coffee or tea of choice, 'Berry Fantasy' cheesecake, freshly squeezed juice.",description:"Description: The perfect breakfast to start your day with joy and delight.",image:"./image/cafe/sweet_breakfast.png"},{id:2,name:"Afternoon Tea",price:"4 USD",ingredients:"Ingredients: any tea, 'Lemon Delight' cake, seasonal fruits.",description:"Description: Light afternoon break with refreshing tea and delicious dessert.",image:"./image/cafe/afternoon_tea.png"},{id:3,name:"Evening Delight",price:"6 USD",ingredients:"Ingredients: coffee or tea of choice, chocolate fondant.",description:"Description: Evening delight with an elegant combination of chocolate.",image:"./image/cafe/evening_delight.png"}],Ee=[{id:1,name:"Lavender Calm",price:"2.00 USD",ingredients:"Ingredients: lavender flowers, mint, lemon balm, chamomile.",description:"Description: An aromatic herbal tea that helps to relax and relieve stress.",image:"./image/cafe/lavender_tea.png"},{id:2,name:"Citrus Boost",price:"2.20 USD",ingredients:"Ingredients: lemon zest, orange zest, ginger, green tea.",description:"Description: A refreshing tea with citrus notes and a light spicy taste of ginger.",image:"./image/cafe/citrus_tea.png"},{id:3,name:"Berry Symphony",price:"2.30 USD",ingredients:"Ingredients: dried raspberries, blueberries, rose hips, hibiscus.",description:"Description: A sweet tea with a rich berry flavor and a pleasant tartness.",image:"./image/cafe/berry_tea.png"}],Oe=["Bath","Cafe","Process","Spa"],qe={mainGalleryHeader:"Immerse Yourself in the World of Luxurious Harmony: Our SPA Procedures Photo Gallery",mainGalleryText:"Feel the emotion of luxury and relaxation while viewing our photos of the SPA atmosphere. Allow yourself to escape from the daily routine and enjoy the beauty and luxury of every detail of our procedures and furnishings."},Ke=[{id:1,image:"./image/gallery/gallery_bath_1.png"},{id:2,image:"./image/gallery/gallery_bath_2.png"},{id:3,image:"./image/gallery/gallery_bath_3.png"},{id:4,image:"./image/gallery/gallery_bath_4.png"},{id:5,image:"./image/gallery/gallery_bath_5.png"},{id:6,image:"./image/gallery/gallery_bath_6.png"}],We=[{id:1,image:"./image/gallery/gallery_cafe_1.png"},{id:2,image:"./image/gallery/gallery_cafe_2.png"},{id:3,image:"./image/gallery/gallery_cafe_3.png"},{id:4,image:"./image/gallery/gallery_cafe_4.png"},{id:5,image:"./image/gallery/gallery_cafe_5.png"},{id:6,image:"./image/gallery/gallery_cafe_6.png"}],Ge=[{id:1,image:"./image/gallery/gallery_proces_1.png"},{id:2,image:"./image/gallery/gallery_proces_2.png"},{id:3,image:"./image/gallery/gallery_proces_3.png"},{id:4,image:"./image/gallery/gallery_proces_4.png"},{id:5,image:"./image/gallery/gallery_proces_5.png"},{id:6,image:"./image/gallery/gallery_proces_6.png"}],Re=[{id:1,image:"./image/gallery/gallery_spa_1.png"},{id:2,image:"./image/gallery/gallery_spa_2.png"},{id:3,image:"./image/gallery/gallery_spa_3.png"},{id:4,image:"./image/gallery/gallery_spa_4.png"},{id:5,image:"./image/gallery/gallery_spa_5.png"},{id:6,image:"./image/gallery/gallery_spa_6.png"}],Fe=["Massages","Peelings","Steaming and Wrapping","Ceremonies"],Ve=["Massages","Peelings","Steaming and Wrapping","Ceremonies"],Je=["Massages","Peelings","Steaming and Wrapping","Ceremonies"],Ze=[{id:1,name:"Classic Massage",price:"69/94 USD",description:"A universal technique for relaxing muscles, relieving tension, and improving blood circulation. Ideal for full-body recovery, balancing the body's physical and emotional states. It also includes elements of manual therapy for muscles and body tissues.",duration:"Duration: 60/90 min",image:"./image/type_categories/classic_massage.png"},{id:2,name:"Thai Massage",price:"71/96 USD",description:"A traditional massage technique that combines elements of acupuncture, yoga, and flexible stretching of muscles and connective tissues. This technique is aimed at restoring the body's energy balance, relieving tension, and improving flexibility.",duration:"Duration: 60/90 min",image:"./image/type_categories/thai_massage.png"},{id:3,name:"Sports Massage",price:"71/103 USD",description:"A specialized form of massage developed for athletes to reduce fatigue and prepare the body for physical exertion. It is used to prevent injuries and improve muscle tone, restore energy, and promote recovery after intense training.",duration:"Duration: 90/120 min",image:"./image/type_categories/sports_massage.png"},{id:4,name:"Aromatherapy Massage",price:"63/90 USD",description:"This method of massage uses essential oils for maximum relaxation and therapeutic effects. Essential oils are chosen individually, helping to relieve stress, improve mood, and enhance the body's overall well-being.",duration:"Duration: 60/90 min",image:"./image/type_categories/aromatherapy_massage.png"}],Ye=[{id:1,name:"Sugar Peeling",price:"55 USD",description:"An ideal way to remove dead skin cells and give it a fresh look. The sugar scrub has a delicate texture that gently cleanses the skin, without irritation. This peeling is suitable for all skin types, especially for dry and sensitive skin. The sugar crystals, along with nourishing oils, leave the skin silky smooth, soft, and hydrated. The procedure makes the skin radiant, firm, and healthy.",duration:"Duration: 50 min",image:"./image/type_categories/sugar_peeling.png"},{id:2,name:"Salt Peeling",price:"60 USD",description:"A deep cleansing peeling that exfoliates dead skin cells. The salt scrub effectively removes dead cells, stimulates blood circulation, and improves the overall texture of the skin. The salt is rich in minerals that nourish and rejuvenate the skin. This peeling is especially beneficial for oily and problem skin types, leaving the skin refreshed, toned, and healthy.",duration:"Duration: 60 min",image:"./image/type_categories/salt_peeling.png"},{id:3,name:"Coffee Peeling",price:"60 USD",description:"Coffee peeling is an excellent way to add a boost of energy to your skin. The coffee scrub has antioxidant properties that help fight signs of aging and improve skin elasticity. It gently exfoliates and rejuvenates the skin, leaving it smooth and glowing. The natural oils in the scrub deeply hydrate and nourish the skin, leaving it soft and supple.",duration:"Duration: 60 min",image:"./image/type_categories/coffee_peeling.png"}],Qe=[{id:1,name:"Finnish Sauna",price:"55 USD",description:"This spa treatment promotes deep pore cleansing, improves blood circulation, relieves tension, and contributes to overall body health. The procedure is carried out using hot dry air, which is generated by special stones heated in the sauna. When water is poured on the stones, steam is rapidly released, creating a short-term humidifying effect.",duration:"Duration: 50 min",image:"./image/type_categories/finnish_sauna.png"},{id:2,name:"Turkish Hammam",price:"60 USD",description:"This traditional bath ensures deep cleansing and relaxation through a combination of high temperature and humidity. Intense scrubbing followed by a full-body massage with essential oils and warm water jets revitalizes the skin. The procedure helps cleanse the skin, improve blood circulation, relax muscles, relieve stress, and enhance overall body health.",duration:"Duration: 60 min",image:"./image/type_categories/turkish_hammam.png"},{id:3,name:"Chocolate Wrapping",price:"45 USD",description:"Chocolate wrapping is a spa treatment where melted chocolate is applied to the skin. The treatment hydrates and nourishes the skin, leaving it soft, smooth, and rejuvenated. Chocolate wraps also improve blood circulation, help combat cellulite, and provide an indulgent relaxation experience.",duration:"Duration: 45 min",image:"./image/type_categories/chocolate_wrapping.png"},{id:4,name:"Seaweed Wrapping",price:"40 USD",description:"Seaweed wrapping is a spa treatment where a special mixture of seaweed is applied to the body. The procedure helps detoxify the skin, nourish it with vitamins and minerals, and improve its overall elasticity. The seaweed wrap also stimulates blood circulation, reduces cellulite, and enhances skin tone.",duration:"Duration: 40 min",image:"./image/type_categories/seaweed_wrapping.png"}],Xe=[{id:1,name:"Tea Ceremony",price:"55 USD",description:"This is the ancient art of preparing and drinking tea, which promotes inner peace and harmony. During the ceremony, our masters reveal to you the subtleties of traditional methods of brewing tea, and you enjoy the exquisite aroma of high-quality tea.",duration:"Duration: 60 min",image:"./image/type_categories/tea_ceremony.png"},{id:2,name:"Aromatherapy Ceremony",price:"60 USD",description:"The aromatherapy ceremony is a spa ritual that uses the power of natural essential oils to improve physical and emotional well-being. During the ceremony, the aromas are diffused in the air or applied to the body, creating an atmosphere of tranquility and harmony.",duration:"Duration: 60 min",image:"./image/type_categories/aromatherapy_ceremony.png"}],r={language:V,blogNews:J,gallery:Z,cafe:Y,signUp:Q,spaTherapy:X,momentsOfPleasure:ee,contacts:ae,aboutUsHeader:ie,aboutUsText1:ne,aboutUsText2:te,aboutUsText3:se,aboutUsText4:oe,philosophyHeader:re,ecoStrategiesTitle:le,ecoStrategiesText:ce,professionalCareTitle:ge,professionalCareText:me,individualApproachTitle:pe,individualApproachText:de,servicesHeader:ue,categories:he,learnMore:ye,specialistsHeader:_e,specialists:fe,whyUsHeader:ve,qualityTitle:ke,qualityDescription:be,effectivenessTitle:we,effectivenessDescription:je,safetyTitle:Te,safetyDescription:$e,OrderHeader:Se,orderText:Ce,placeholderName:Me,placeholderEmail:xe,placeholderPhone:ze,headerBlogNews:He,mainBlog:Pe,blogs:De,news:Ue,HeaderCafe:Ie,mainCafe:Ae,Desserts:Le,Coffee:Ne,specialOffers:Be,tea:Ee,HeaderGallery:Oe,mainGallery:qe,Bath:Ke,Cafe:We,Process:Ge,Spa:Re,Massages:Fe,Peelings:Ve,"Steaming and Wrapping":["Massages","Peelings","Steaming and Wrapping","Ceremonies"],Ceremonies:Je,typeMassages:Ze,typePeelings:Ye,typeSteamingWrapping:Qe,teaCeremonies:Xe},ea="UK",aa="Новини i блог",ia="Фотогалерея",na="Кав’ярня",ta="Записатись",sa="SPA-терапія",oa="Подаруйте собі миті насолоди",ra="Контакти",la="Про нас",ca="Вітаємо вас у нашому унікальному закладі, де кожен куток пронизаний атмосферою затишку та релаксу. Тут ви зможете забути про гамір міста та щоденні турботи, поринаючи у світ бажань і задоволення. Наша місія - дарувати вам не лише приємні моменти, а й дбати про ваше благополуччя та здоров'я. Ви гість у нашому світі і ми готові зробити все для вашої гармонії та насолоди.",ga="Ми створили атмосферу, де ви відчуєте себе особливим, де кожен ковток кави і спа-ритуал стане чарівною миттю для вас.",ma="Для нас кожен гість унікальний, тому пропонуємо індивідуальні програми спа-процедур та персоналізовані кавові напої.",pa="Ми пропонуємо широкий спектр спа-процедур, від масажів до ексклюзивних обгортань, а також різноманітні пропарки та церемонії.",da="Філософія",ua="Еко стратегії",ha="Ми впроваджуємо екологічно чисті технології та використовуємо натуральні, органічні продукти, щоб забезпечити не лише ефективність процедур, а й безпеку для навколишнього середовища. Наші інноваційні рішення допомагають зменшити вплив на природу, зберігаючи її красу для майбутніх поколінь.",ya="Професійний догляд",_a="Кваліфіковані спеціалісти в курсі останніх тенденцій і технік. Вони розуміють унікальні потреби клієнта і завжди готові надати індивідуальні рекомендації та високоякісний сервіс. Працюють з великим старанням, щоб забезпечити вам найкращі результати і незабутні враження від кожного візиту до нашого спа-салону.",fa="Індивідуальний підхід",va="Наші спеціалісти пропонують індивідуальний підхід до кожного клієнта, враховуючи всі особливості вашої шкіри та розробляючи унікальні програми догляду, адаптовані до ваших потреб. Це поєднання дозволяє досягти найкращих результатів і забезпечує максимальний ефект від процедур.",ka="Послуги",ba=[{id:1,name:"Масажі",description:"Наші масажі - це унікальне поєднання традиційних та сучасних технік. Від класичного до тайського, спортивного та аромотерапевтичного масажу - кожна процедура спрямована на зняття м'язового напруження, покращення кровообігу та загального самопочуття. Довіртеся нашим досвідченим масажистам і відчуйте глибоке розслаблення.",image:"./image/category/Massage.png",moreInfoUrl:"/massage.html"},{id:2,name:"Пілінги",description:"Пілінг - це косметична процедура, спрямована на видалення верхнього шару мертвих клітин шкіри для покращення її текстури, зовнішнього вигляду та загального стану. Основна перевага процедури полягає у відлущуванні шкіри, що стимулює її оновлення і регенерацію. Вибір пілінгу залежить від індивідуальних потреб шкіри та очікуваних результатів.",image:"./image/category/peeling.jpg",moreInfoUrl:"/peelings.html"},{id:3,name:"Пропарки і обгортання",description:"У нашому спа-комплексі ми пропонуємо кілька видів пропарок та обгортань, використовуємо тільки натуральні ефірні олії та трави, що підсилюють ефект від процедури і дарують приємні аромати. Наші професійні фахівці забезпечать вам комфорт і релаксацію під час процедур, враховуючи всі ваші побажання. Під час обгортання на тіло наносяться спеціальні суміші з натуральних компонентів, таких як водорості, глина, мед, шоколад або ефірні олії, а потім тіло загортають у плівку або спеціальні тканини.",image:"./image/category/baths.jpg",moreInfoUrl:"/steaming_wrapping.html"},{id:4,name:"Церемонії",description:"Церемонії сприяють фізичному та емоційному оздоровленню, а й створюють унікальну атмосферу, де можна відчути гармонію з собою та навколишнім світом. Вони допомагають вам зупинитися, розслабитися та насолодитися моментом, забувши про стреси та турботи. Відвідуючи наші церемонії, ви отримуєте не лише фізичне розслаблення, а й духовне оновлення, що допоможе вам почуватися щасливішими та здоровішими.",image:"./image/category/caption.jpg",moreInfoUrl:"/ceremonies.html"}],wa="Дізнатися більше",ja="Спеціалісти",Ta=[{id:1,name:"Оксана Коваленко",role:"Адміністратор",image:"./image/therapist/admin.png"},{id:2,name:"Анна Герасименко",role:"Масажистка",image:"./image/therapist/Anna.png"},{id:3,name:"Олександр Шевченко",role:"Масажист, банщик",image:"./image/therapist/Alex.png"},{id:4,name:"Марія Ковальчук",role:"Масажистка",image:"./image/therapist/Mari.png"},{id:5,name:"Іван Гончаренко",role:"Масажист, банщик",image:"./image/therapist/Ivan.png"},{id:6,name:"Олена Бойко",role:"Масажистка",image:"./image/therapist/Elena.png"},{id:7,name:"Дмитро Сидоренко",role:"Масажист, банщик",image:"./image/therapist/Dmitry.png"},{id:8,name:"Тетяна Мельник",role:"Масажистка",image:"./image/therapist/Tanya.png"},{id:9,name:"Андрій Петровський",role:"Масажист, банщик",image:"./image/therapist/Andriy.png"}],$a="Чому саме ми?",Sa="Якість",Ca="Наш спа-салон забезпечує найвищу якість послуг завдяки кваліфікованим спеціалістам, індивідуальному підходу та використанню новітніх технологій і органічних продуктів.",Ma="Ефективність",xa="Ефективність наших спа-процедур полягає в поєднанні передових методик, індивідуально підібраних програм і ретельно відібраних продуктів, що гарантують тривалі та помітні результати.",za="Безпека",Ha="Безпека нашого спа-салону забезпечується дотриманням найвищих стандартів гігієни, використанням екологічно чистих продуктів і суворим контролем якості процедур.",Pa="Запис",Da="Ви можете записатися на наші послуги, залишивши свої дані",Ua="Ваше ім'я",Ia="Ваш email",Aa="Ваш телефон",La=["Блог ","Новини"],Na={mainBlogHeader:"Життя в гармонії зі собою: Блог та Новини нашого СПА-салону",mainBlogText:"У нашому блозі та розділі новин ви знайдете найсвіжіші поради з догляду за собою, інсайти з мистецтва релаксу та всі найцікавіші новини з життя нашого СПА-салону. Діліться з нами вашими думками та враженнями, вивчайте та дізнавайтесь більше про світ краси та гармонії разом із нашим експертним командою."},Ba=[{id:1,blogHeader:"Переваги регулярних візитів до СПА",blogMainImg:"./image/blogNews/blog_main_1.png",blogDescription:"Зняття стресу та релаксація: Як регулярні процедури допомагають зменшити рівень стресу і покращити загальний стан здоров’я. Оздоровлення шкіри: Роль пілінгів, масок та обгортань у підтримці здоров'я та краси шкіри.",blogtextImg:"./image/blogNews/blog_small_image_1.png"},{id:2,blogHeader:"Типи масажів та їх переваги",blogMainImg:"./image/blogNews/blog_main_2.png",blogDescription:"Лімфодренажний масаж: Як він допомагає зменшити набряки та покращити циркуляцію лімфи. Шведський масаж: Основні техніки та користь для тіла. Тайський масаж: Традиційні методи та їх вплив на організм.",blogtextImg:"./image/blogNews/blog_small_image_2.png"},{id:3,blogHeader:"Пілінги: як обрати найкращий",blogMainImg:"./image/blogNews/blog_main_3.png",blogDescription:"Сольовий скраб: Користь та ефективність у видаленні відмерлих клітин. Скраб з кавою: Як кофеїн стимулює та омолоджує шкіру. Цукровий скраб: Ніжний та ефективний спосіб очищення шкіри.",blogtextImg:"./image/blogNews/blog_small_image_3.png"}],Ea=[{id:1,blogHeader:"Спеціальна пропозиція: Знижка на парні відвідування",blogMainImg:"./image/blogNews/news_main_1.png",blogDescription:"У червні ми запускаємо спеціальну акцію для пар: знижка 20% на всі парні процедури! Приходьте разом з коханою людиною та насолоджуйтеся незабутніми моментами релаксу.",blogtextImg:"./image/blogNews/news_small_image_1.png"},{id:2,blogHeader:"Літня акція на пілінги",blogMainImg:"./image/blogNews/news_main_2.png",blogDescription:"У літній сезон особливо важливо піклуватися про шкіру. Саме тому ми пропонуємо знижку 30% на всі види пілінгів! Не пропустіть можливість зробити свою шкіру гладенькою та сяючою.",blogtextImg:"./image/blogNews/news_small_image_2.png"},{id:3,blogHeader:"Спеціальна пропозиція для нових клієнтів",blogMainImg:"./image/blogNews/news_main_3.png",blogDescription:"Для всіх нових клієнтів нашого СПА-салону діє спеціальна пропозиція: знижка 50% на перший візит. Скористайтеся нагодою та відкрийте для себе світ розкішного релаксу.",blogtextImg:"./image/blogNews/news_small_image_3.png"}],Oa=["Десерти","Кава","Спеціальні пропозициї","Чаї"],qa={mainCafeHeader:"Ласкаво просимо до нашої кав'ярні у спа-салоні!",mainCafeText:"Поглибіть своє відчуття розкоші та задоволення, насолоджуйтесь ароматним кавовим напоєм у затишній атмосфері нашого закладу. У нашій кав'ярні ви зможете насолодитися широким вибором свіжообсмажених кавових зерен, найкращими чаєвими сортами та апетитними десертами - все це для вашого відпочинку та задоволення. Завітайте до нас сьогодні та даруйте собі миті насолоди та розслаблення!"},Ka=[{id:1,name:"Чізкейк „Ягідна фантазія“",price:"110 грн",ingredients:"Склад: сир маскарпоне, основа з печива, ягідний соус з чорниці та малини.",description:"Опис: Ніжний чізкейк з освіжаючим ягідним соусом.",image:"./image/cafe/chiscake.png"},{id:2,name:"Торт „Лимонна насолода“",price:"100 грн",ingredients:"Склад: лимонний крем, пісочне тісто, меренга.",description:"Опис: Легкий лимонний торт з хрустким пісочним тістом та ніжною меренгою.",image:"./image/cafe/lemon_cake.png"},{id:3,name:"Шоколадний фондан",price:"120 грн",ingredients:"Склад: темний шоколад, вершкове масло, яйця, цукор.",description:"Опис: Гарячий десерт з рідкою шоколадною начинкою, що справжній рай для любителів шоколаду.",image:"./image/cafe/Chocolate_fondant.png"}],Wa=[{id:1,name:"Еспресо 'Вершковий шоколад'",price:"70 грн",ingredients:"Склад: свіжообсмажені зерна арабіки, темний шоколад, вершки.",description:"Опис: Інтенсивний еспресо з додаванням темного шоколаду та вершків для ніжного смаку.",image:"./image/cafe/espresso.png"},{id:2,name:"Латте 'Карамельне задоволення'",price:"90 грн",ingredients:"Склад: еспресо, молоко, карамельний сироп.",description:"Опис: М'який латте з солодкими нотками карамелі, що робить його ідеальним для будь-якої пори дня.",image:"./image/cafe/Latte.png"},{id:3,name:"Капучино 'Ванільний рай'",price:"85 грн",ingredients:"Склад: еспресо, молоко, ванільний сироп.",description:"Опис: Класичний капучино з додаванням ванільного сиропу для витонченого смаку.",image:"./image/cafe/cappuccino.png"}],Ga=[{id:1,name:"Солодкий сніданок",price:"180 грн",ingredients:"Склад: кава або чай на вибір, чізкейк 'Ягідна фантазія', свіжовичавлений сік.",description:"Опис: Ідеальний сніданок для початку дня з насолодою та радістю.",image:"./image/cafe/sweet_breakfast.png"},{id:2,name:"Післяобідній чай",price:"160 грн",ingredients:"Склад: будь-який чай, торт 'Лимонна насолода', сезонні фрукти.",description:"Опис: Легка післяобідня перерва з освіжаючим чаєм та смачним десертом.",image:"./image/cafe/afternoon_tea.png"},{id:3,name:"Вечірня насолода",price:"200 грн",ingredients:"Склад: кава або чай на вибір, шоколадний фондант.",description:"Опис: Вечірня насолода з елегантним поєднанням шоколаду.",image:"./image/cafe/evening_delight.png"}],Ra=[{id:1,name:"Лавандовий спокій",price:"75 грн",ingredients:"Склад: лавандові квіти, м'ята, меліса, ромашка.",description:"Опис: Ароматний трав'яний чай, який допомагає розслабитися та зняти стрес.",image:"./image/cafe/lavender_tea.png"},{id:2,name:"Цитрусовий заряд",price:"80 грн",ingredients:"Склад: лимонна цедра, апельсинова цедра, імбир, зелений чай.",description:"Опис: Освіжаючий чай з цитрусовими нотками та легким пікантним смаком імбиру.",image:"./image/cafe/citrus_tea.png"},{id:3,name:"Ягідна симфонія",price:"85 грн",ingredients:"Склад: сушені ягоди малини, чорниці, шипшини, гібіскус.",description:"Опис: Солодкуватий чай з насиченим ягідним смаком та приємною кислинкою.",image:"./image/cafe/berry_tea.png"}],Fa=["Баня","Кав'ярня","Процес","Спа"],Va={mainGalleryHeader:"Занурьтесь в світ розкішної гармонії: Наша Фотогалерея СПА-процедур",mainGalleryText:"Відчуйте емоцію розкоші та відпочинку, переглядаючи наші фотографії з обстановкою нашого СПА. Дозвольте собі відірватися від буденності та насолодитися красою і розкішшю кожної деталі наших процедур та облаштування."},Ja=[{id:1,image:"./image/gallery/gallery_bath_1.png"},{id:2,image:"./image/gallery/gallery_bath_2.png"},{id:3,image:"./image/gallery/gallery_bath_3.png"},{id:4,image:"./image/gallery/gallery_bath_4.png"},{id:5,image:"./image/gallery/gallery_bath_5.png"},{id:6,image:"./image/gallery/gallery_bath_6.png"}],Za=[{id:1,image:"./image/gallery/gallery_cafe_1.png"},{id:2,image:"./image/gallery/gallery_cafe_2.png"},{id:3,image:"./image/gallery/gallery_cafe_3.png"},{id:4,image:"./image/gallery/gallery_cafe_4.png"},{id:5,image:"./image/gallery/gallery_cafe_5.png"},{id:6,image:"./image/gallery/gallery_cafe_6.png"}],Ya=[{id:1,image:"./image/gallery/gallery_proces_1.png"},{id:2,image:"./image/gallery/gallery_proces_2.png"},{id:3,image:"./image/gallery/gallery_proces_3.png"},{id:4,image:"./image/gallery/gallery_proces_4.png"},{id:5,image:"./image/gallery/gallery_proces_5.png"},{id:6,image:"./image/gallery/gallery_proces_6.png"}],Qa=[{id:1,image:"./image/gallery/gallery_spa_1.png"},{id:2,image:"./image/gallery/gallery_spa_2.png"},{id:3,image:"./image/gallery/gallery_spa_3.png"},{id:4,image:"./image/gallery/gallery_spa_4.png"},{id:5,image:"./image/gallery/gallery_spa_5.png"},{id:6,image:"./image/gallery/gallery_spa_6.png"}],Xa=["Масажі","Пілінги","Пропарювання та обгортання","Церемонії"],ei=["Масажі","Пілінги","Пропарювання та обгортання","Церемонії"],ai=["Масажі","Пілінги","Пропарювання та обгортання","Церемонії"],ii=[{id:1,name:"Класичний масаж",price:"2500/3400 грн",description:"Універсальна техніка для розслаблення м'язів, зняття напруження та покращення кровообігу. Ідеально підходить для тіла, що шукає баланс між фізичним і емоційним станом. Включає використання різних методів мануального впливу на м'язи і тканини тіла.",duration:"Тривалість: 60/90 хв",image:"./image/type_categories/classic_massage.png"},{id:2,name:"Тайський масаж",price:"2600/3500 грн",description:"Це традиційна техніка масажу, яка поєднує в собі елементи акупунктури, йоги, гнучкого масажу м'язів та рефлексотерапії. Цей масаж спрямований на відновлення енергетичного балансу в тілі, зняття напруги та поліпшення гнучкості.",duration:"Тривалість: 60/90 хв",image:"./image/type_categories/thai_massage.png"},{id:3,name:"Спортивний масаж",price:"2600/3800 грн",description:"Спеціалізована форма масажу, розроблена для спортсменів та осіб, що ведуть активний спосіб життя. Він спрямований на підготовку тіла до фізичних навантажень, підтримання фізичної форми, попередження травм та прискорення відновлення після тренувань.",duration:"Тривалість: 90/120 хв",image:"./image/type_categories/sports_massage.png"},{id:4,name:"Ароматерапевтичний масаж",price:"2300/3300 грн",description:"Це метод масажу, при якому використовуються ефірні олії для максимального розслаблення та терапевтичного ефекту. Ці олії підбираються індивідуально, допомагають зняти стрес, покращити настрій та загальний стан організму.",duration:"Тривалість: 60/90 хв",image:"./image/type_categories/aromatherapy_massage.png"}],ni=[{id:1,name:"Цукровий пілінг",price:"2000 грн",description:"Ідеальний спосіб м'яко видалити мертві клітини шкіри та надати їй свіжого вигляду. Цукровий скраб має ніжну текстуру, яка делікатно очищує шкіру, не травмуючи її. Цей вид пілінгу підходить для всіх типів шкіри, особливо для чутливої. Цукрові кристали разом з натуральними оліями глибоко живлять та зволожують шкіру, залишаючи її гладенькою та м'якою. Після процедури шкіра стає шовковистою, пружною та має здоровий блиск.",duration:"Тривалість: 50 хв",image:"./image/type_categories/sugar_peeling.png"},{id:2,name:"Сольовий пілінг",price:"2200 грн",description:"Це потужний спосіб глибокого очищення шкіри. Сольовий скраб відмінно видаляє мертві клітини, стимулює кровообіг та сприяє загальному тонусу шкіри та організму. Сіль насичує шкіру мінералами та мікроелементами, що сприяє її живленню та покращенню текстури. Цей вид пілінгу особливо корисний для жирної, проблемної шкіри, надаючи їй відчуття свіжості та тонусу.",duration:"Тривалість: 60 хв",image:"./image/type_categories/salt_peeling.png"},{id:3,name:"Кавовий пілінг",price:"2200 грн",description:"Кавовий пілінг – це чудовий спосіб додати вашій шкірі енергії та тонусу. Кавовий скраб має антиоксидантні властивості, які допомагають боротися зі знаками старіння та запобігати пересушуванню шкіри. Кава м'яко делікатно знімає ороговілі клітини шкіри, освіжаючи та омолоджуючи її. Натуральні олії у складі скрабу глибоко живлять та зволожують шкіру, залишаючи її гладенькою, еластичною.",duration:"Тривалість: 60 хв",image:"./image/type_categories/coffee_peeling.png"}],ti=[{id:1,name:"Фінська сауна",price:"2000 грн",description:"Це спа-процедура, що сприяє глибокому очищенню пор, покращенню кровообігу, зняттю напруження та загальному оздоровленню організму. Процедура здійснюється за допомогою гарячого сухого повітря, яке створюється камінням – спеціальною піччю з розігрітими каменями. Під нагрів повітря в сауні, на камені наливають воду, яка швидко випаровується, створюючи короткочасний ефект підвищеної вологості.",duration:"Тривалість: 50 хв",image:"./image/type_categories/finnish_sauna.png"},{id:2,name:"Турецький хамам",price:"2200 грн",description:"Це традиційна лазня, що забезпечує глибоке очищення та релаксацію через поєднання високої температури та вологості. Інтенсивне скрабування з подальшим масажем всього тіла з використанням мильної піни та промивання теплим водою. Процедури в хамамі сприяють очищенню шкіри, покращенню кровообігу, розслабленню м'язів, зняттю стресу та загальному оздоровленню.",duration:"Тривалість: 60 хв",image:"./image/type_categories/turkish_hammam.png"},{id:3,name:"Шоколадне обгортання",price:"1700 грн",description:"Шоколадне обгортання – це спа-процедура, під час якої на тіло наносять свіжий шоколад. Ця процедура сприяє зволоженню шкіри, покращенню кровообігу та загальному розслабленню. Шоколадні обгортання також можуть стимулювати кровообіг і допомагати в боротьбі з целюлітом та дарує неймовірне задоволення.",duration:"Тривалість: 45 хв",image:"./image/type_categories/chocolate_wrapping.png"},{id:4,name:"Водоростеве обгортання",price:"1500 грн",description:"Водоростеве обгортання – це спа-процедура, під час якої на тіло наносять спеціальну суміш з морських водоростей, що сприяють очищенню, зволоженню та живленню шкіри. Вони багаті різними мінералами та мікроелементами, що обгортання сприяє покращенню обміну речовин, зменшенню целюліту та підвищенню еластичності шкіри.",duration:"Тривалість: 40 хв",image:"./image/type_categories/seaweed_wrapping.png"}],si=[{id:1,name:"Чайна церемонія",price:"2000 грн",description:"Це давнє мистецтво приготування і вживання чаю, яке сприяє внутрішньому спокою та гармонії. Під час церемонії наші майстри розкривають перед вами тонкощі традиційних методів заварювання чаю, і ви насолоджуєтесь якісним ароматом чаю.",duration:"Тривалість: 60 хв",image:"./image/type_categories/tea_ceremony.png"},{id:2,name:"Церемонія з аромамаслами",price:"2200 грн",description:"Церемонія з аромамаслами – це спа-ритуал, що використовує силу натуральних ефірних олій для покращення фізичного та емоційного стану. Під час церемонії аромамасла розпилюються у повітрі або наносяться на тіло, створюючи атмосферу спокою і гармонії.",duration:"Тривалість: 60 хв",image:"./image/type_categories/aromatherapy_ceremony.png"}],c={language:ea,blogNews:aa,gallery:ia,cafe:na,signUp:ta,spaTherapy:sa,momentsOfPleasure:oa,contacts:ra,aboutUsHeader:la,aboutUsText1:ca,aboutUsText2:ga,aboutUsText3:ma,aboutUsText4:pa,philosophyHeader:da,ecoStrategiesTitle:ua,ecoStrategiesText:ha,professionalCareTitle:ya,professionalCareText:_a,individualApproachTitle:fa,individualApproachText:va,servicesHeader:ka,categories:ba,learnMore:wa,specialistsHeader:ja,specialists:Ta,whyUsHeader:$a,qualityTitle:Sa,qualityDescription:Ca,effectivenessTitle:Ma,effectivenessDescription:xa,safetyTitle:za,safetyDescription:Ha,OrderHeader:Pa,orderText:Da,placeholderName:Ua,placeholderEmail:Ia,placeholderPhone:Aa,headerBlogNews:La,mainBlog:Na,blogs:Ba,news:Ea,HeaderCafe:Oa,mainCafe:qa,Desserts:Ka,Coffee:Wa,specialOffers:Ga,tea:Ra,HeaderGallery:Fa,mainGallery:Va,Bath:Ja,Cafe:Za,Process:Ya,Spa:Qa,Massages:Xa,Peelings:ei,"Steaming and Wrapping":["Масажі","Пілінги","Пропарювання та обгортання","Церемонії"],Ceremonies:ai,typeMassages:ii,typePeelings:ni,typeSteamingWrapping:ti,teaCeremonies:si},oi="CZ",ri="Novinky a blog",li="Fotogalerie",ci="Kavárna",gi="Objednat se",mi="SPA terapie",pi="Dopřejte si chvíle potěšení",di="Kontakty",ui="O nás",hi="Vítejte v našem jedinečném zařízení, kde je každý kout naplněn atmosférou útulnosti a relaxace. Zde můžete zapomenout na hluk města a každodenní starosti, ponořit se do světa přání a potěšení. Naším posláním je dát vám nejen příjemné chvíle, ale také pečovat o vaši pohodu a zdraví. Jste hostem v našem světě a jsme připraveni udělat vše pro vaši harmonii a potěšení.",yi="Vytvořili jsme atmosféru, kde se budete cítit výjimečně, kde se každý doušek kávy a lázeňský rituál stane magickou chvílí pro vás.",_i="Pro nás je každý host jedinečný, a proto nabízíme individuální programy lázeňských procedur a personalizované kávové nápoje.",fi="Nabízíme širokou škálu lázeňských procedur, od masáží po exkluzivní zábaly, stejně jako různé parní lázně a obřady.",vi="Filozofie",ki="Eko strategie",bi="Implementujeme ekologicky šetrné technologie a používáme přírodní, organické produkty, abychom zajistili nejen účinnost procedur, ale i bezpečnost pro životní prostředí. Naše inovativní řešení pomáhají snížit dopad na přírodu a uchovat její krásu pro budoucí generace.",wi="Profesionální péče",ji="Kvalifikovaní specialisté jsou si vědomi nejnovějších trendů a technik. Rozumí jedinečným potřebám klienta a jsou vždy připraveni poskytnout individuální doporučení a vysoce kvalitní služby. Pracují pilně, aby zajistili nejlepší výsledky a nezapomenutelné dojmy z každé návštěvy našeho lázeňského salonu.",Ti="Individuální přístup",$i="Naši specialisté nabízejí individuální přístup ke každému klientovi, zohledňují všechny vlastnosti vaší pokožky a vyvíjejí unikátní programy péče přizpůsobené vašim potřebám. Tato kombinace umožňuje dosáhnout nejlepších výsledků a zajišťuje maximální efekt procedur.",Si="Služby",Ci=[{id:1,name:"Masáže",description:"Naše masáže jsou unikátní kombinací tradičních a moderních technik. Od klasických po thajské, sportovní a aromaterapeutické masáže - každá procedura je zaměřena na uvolnění svalového napětí, zlepšení krevního oběhu a celkové pohody. Důvěřujte našim zkušeným masérům a pocítíte hlubokou relaxaci.",image:"./image/category/Massage.png",moreInfoUrl:"/massage.html"},{id:2,name:"Peelingy",description:"Peeling je kosmetická procedura zaměřená na odstranění horní vrstvy mrtvých kožních buněk ke zlepšení její textury, vzhledu a celkového stavu. Hlavní výhodou procedury je exfoliace pokožky, která stimuluje její obnovu a regeneraci. Výběr peelingu závisí na individuálních potřebách pokožky a očekávaných výsledcích.",image:"./image/category/peeling.jpg",moreInfoUrl:"/peelings.html"},{id:3,name:"Propařování a zábaly",description:"V našem lázeňském komplexu nabízíme několik druhů propařování a zábalů, využíváme pouze přírodní esenciální oleje a bylinky, které zvyšují účinek procedur a poskytují příjemné vůně. Naši profesionální specialisté vám zajistí pohodlí a relaxaci během procedur, s ohledem na všechna vaše přání. Během zábalu se na tělo aplikují speciální směsi přírodních složek, jako jsou řasy, jíly, med, čokoláda nebo esenciální oleje, a poté se tělo zabalí do fólie nebo speciálních látek.",image:"./image/category/baths.jpg",moreInfoUrl:"/steaming_wrapping.html"},{id:4,name:"Ceremonie",description:"Ceremonie přispívají k fyzickému a emočnímu uzdravení a vytvářejí jedinečnou atmosféru, kde můžete pocítit harmonii se sebou a okolním světem. Pomáhají vám zastavit se, uvolnit a užít si chvíle, zapomenout na stresy a starosti. Návštěvou našich ceremonií získáte nejen fyzické uvolnění, ale i duchovní obnovu, která vám pomůže cítit se šťastněji a zdravěji.",image:"./image/category/caption.jpg",moreInfoUrl:"/ceremonies.html"}],Mi="Zjistěte více",xi="Specialisté",zi=[{id:1,name:"Oksana Kovalenko",role:"Administrátor",image:"./image/therapist/admin.png"},{id:2,name:"Anna Herasymenko",role:"Masérka",image:"./image/therapist/Anna.png"},{id:3,name:"Oleksandr Shevchenko",role:"Masér, odborník na sauny",image:"./image/therapist/Alex.png"},{id:4,name:"Mariya Kovalchuk",role:"Masérka",image:"./image/therapist/Mari.png"},{id:5,name:"Ivan Honcharenko",role:"Masér, odborník na sauny",image:"./image/therapist/Ivan.png"},{id:6,name:"Olena Boyko",role:"Masérka",image:"./image/therapist/Elena.png"},{id:7,name:"Dmytro Sydorenko",role:"Masér, odborník na sauny",image:"./image/therapist/Dmitry.png"},{id:8,name:"Tetyana Melnyk",role:"Masérka",image:"./image/therapist/Tanya.png"},{id:9,name:"Andriy Petrovskiy",role:"Masér, odborník na sauny",image:"./image/therapist/Andriy.png"}],Hi="Proč právě my?",Pi="Kvalita",Di="Naše lázně zajišťují nejvyšší kvalitu služeb díky kvalifikovaným specialistům, individuálnímu přístupu a používání nejnovějších technologií a organických produktů.",Ui="Účinnost",Ii="Účinnost našich lázeňských procedur spočívá v kombinaci pokročilých technik, individuálně přizpůsobených programů a pečlivě vybraných produktů, které zaručují dlouhodobé a viditelné výsledky.",Ai="Bezpečnost",Li="Bezpečnost našeho lázeňského zařízení je zajištěna dodržováním nejvyšších hygienických standardů, používáním ekologicky šetrných produktů a přísnou kontrolou kvality procedur.",Ni="Objednávka",Bi="Můžete si objednat naše služby zadáním svých údajů",Ei="Vaše jméno",Oi="Váš email",qi="Váš telefon",Ki=["Blog","Novinky"],Wi={mainBlogHeader:"Život v harmonii se sebou: Blog a Novinky našeho SPA-salonu",mainBlogText:"V našem blogu a sekci novinek najdete nejnovější tipy na péči o sebe, postřehy o umění relaxace a všechny nejzajímavější novinky ze života našeho SPA-salonu. Podělte se s námi o své myšlenky a dojmy, učte se a objevujte více o světě krásy a harmonie spolu s naším odborným týmem."},Gi=[{id:1,blogHeader:"Výhody pravidelných návštěv SPA",blogMainImg:"./image/blogNews/blog_main_1.png",blogDescription:"Úleva od stresu a relaxace: Jak pravidelné procedury pomáhají snižovat hladinu stresu a zlepšovat celkové zdraví. Omlazení pokožky: Role peelingů, masek a zábalů při udržování zdraví a krásy pokožky.",blogtextImg:"./image/blogNews/blog_small_image_1.png"},{id:2,blogHeader:"Typy masáží a jejich výhody",blogMainImg:"./image/blogNews/blog_main_2.png",blogDescription:"Lymfatická masáž: Jak pomáhá snižovat otoky a zlepšovat cirkulaci lymfy. Švédská masáž: Základní techniky a přínosy pro tělo. Thajská masáž: Tradiční metody a jejich dopad na tělo.",blogtextImg:"./image/blogNews/blog_small_image_2.png"},{id:3,blogHeader:"Peelingy: Jak vybrat ten nejlepší",blogMainImg:"./image/blogNews/blog_main_3.png",blogDescription:"Solný peeling: Výhody a účinnost při odstraňování odumřelých buněk. Kávový peeling: Jak kofein stimuluje a omlazuje pokožku. Cukrový peeling: Jemný a účinný způsob čištění pokožky.",blogtextImg:"./image/blogNews/blog_small_image_3.png"}],Ri=[{id:1,blogHeader:"Speciální nabídka: Sleva na návštěvy párů",blogMainImg:"./image/blogNews/news_main_1.png",blogDescription:"V červnu spouštíme speciální nabídku pro páry: 20% sleva na všechny párové procedury! Přijďte se svou milovanou osobou a užijte si nezapomenutelné chvíle relaxace.",blogtextImg:"./image/blogNews/news_small_image_1.png"},{id:2,blogHeader:"Letní peelingová akce",blogMainImg:"./image/blogNews/news_main_2.png",blogDescription:"Během letní sezóny je zvláště důležité pečovat o svou pokožku. Proto nabízíme 30% slevu na všechny typy peelingů! Nepropásněte příležitost učinit svou pokožku hladkou a zářivou.",blogtextImg:"./image/blogNews/news_small_image_2.png"},{id:3,blogHeader:"Speciální nabídka pro nové klienty",blogMainImg:"./image/blogNews/news_main_3.png",blogDescription:"Pro všechny nové klienty našeho SPA-salonu platí speciální nabídka: 50% sleva na první návštěvu. Využijte této příležitosti a objevte svět luxusní relaxace.",blogtextImg:"./image/blogNews/news_small_image_3.png"}],Fi=["Dezerty","Káva","Speciální nabídky","Čaje"],Vi={mainCafeHeader:"Vítejte v naší kavárně v SPA-salonu!",mainCafeText:"Ponořte se do pocitu luxusu a spokojenosti, užijte si aromatickou kávu v útulné atmosféře našeho podniku. V naší kavárně si můžete vychutnat široký výběr čerstvě pražených kávových zrn, nejlepší čajové odrůdy a lahodné dezerty - to vše pro vaše odpočinek a potěšení. Navštivte nás dnes a dopřejte si chvíle potěšení a relaxace!"},Ji=[{id:1,name:"Cheesecake 'Berry Fantasy'",price:"67 CZK",ingredients:"Ingredience: mascarpone sýr, sušenkový základ, ovocná omáčka z borůvek a malin.",description:"Popis: Jemný cheesecake s osvěžující ovocnou omáčkou.",image:"./image/cafe/chiscake.png"},{id:2,name:"Dort 'Citrónové Potěšení'",price:"60 CZK",ingredients:"Ingredience: citrónový krém, křehké těsto, pusinky.",description:"Popis: Lehký citrónový dort s křupavým křehkým těstem a jemnými pusinkami.",image:"./image/cafe/lemon_cake.png"},{id:3,name:"Čokoládový Fondán",price:"73 CZK",ingredients:"Ingredience: hořká čokoláda, máslo, vejce, cukr.",description:"Popis: Horký dezert s tekutou čokoládovou náplní, skutečný ráj pro milovníky čokolády.",image:"./image/cafe/Chocolate_fondant.png"}],Zi=[{id:1,name:"Espresso 'Krémová čokoláda'",price:"41 Kč",ingredients:"Složení: čerstvě pražená zrna arabiky, tmavá čokoláda, smetana.",description:"Popis: Intenzivní espresso s přídavkem tmavé čokolády a smetany pro jemnou chuť.",image:"./image/cafe/espresso.png"},{id:2,name:"Latte 'Karamelová lahůdka'",price:"51 Kč",ingredients:"Složení: espresso, mléko, karamelový sirup.",description:"Popis: Jemné latte se sladkými tóny karamelu, což jej činí ideálním pro každou denní dobu.",image:"./image/cafe/Latte.png"},{id:3,name:"Cappuccino 'Vanilkový ráj'",price:"47 Kč",ingredients:"Složení: espresso, mléko, vanilkový sirup.",description:"Popis: Klasické cappuccino s přidáním vanilkového sirupu pro vytříbenou chuť.",image:"./image/cafe/cappuccino.png"}],Yi=[{id:1,name:"Sladká snídaně",price:"115 Kč",ingredients:"Složení: káva nebo čaj dle výběru, cheesecake 'Berry Fantasy', čerstvě vymačkaná šťáva.",description:"Popis: Ideální snídaně pro začátek dne s radostí a potěšením.",image:"./image/cafe/sweet_breakfast.png"},{id:2,name:"Odpolední čaj",price:"100 Kč",ingredients:"Složení: jakýkoliv čaj, dort 'Lemon Delight', sezónní ovoce.",description:"Popis: Lehké odpolední občerstvení s osvěžujícím čajem a chutným dezertem.",image:"./image/cafe/afternoon_tea.png"},{id:3,name:"Večerní lahůdka",price:"150 Kč",ingredients:"Složení: káva nebo čaj dle výběru, čokoládový fondant.",description:"Popis: Večerní lahůdka s elegantní kombinací čokolády.",image:"./image/cafe/evening_delight.png"}],Qi=[{id:1,name:"Levandulový klid",price:"44 Kč",ingredients:"Složení: květy levandule, máta, meduňka, heřmánek.",description:"Popis: Aromatický bylinný čaj, který pomáhá relaxovat a ulevit od stresu.",image:"./image/cafe/lavender_tea.png"},{id:2,name:"Citrusový náboj",price:"47 Kč",ingredients:"Složení: citronová kůra, pomerančová kůra, zázvor, zelený čaj.",description:"Popis: Osvěžující čaj s citrusovými tóny a lehkou pikantní chutí zázvoru.",image:"./image/cafe/citrus_tea.png"},{id:3,name:"Bobulová symfonie",price:"50 Kč",ingredients:"Složení: sušené maliny, borůvky, šípek, ibišek.",description:"Popis: Sladký čaj s bohatou ovocnou chutí a příjemnou kyselostí.",image:"./image/cafe/berry_tea.png"}],Xi=["Koupel","Kavárna","Proces","Spa"],en={mainGalleryHeader:"Ponořte se do světa luxusní harmonie: Naše fotogalerie SPA procedur",mainGalleryText:"Pociťte emoci luxusu a relaxace při prohlížení našich fotografií atmosféry SPA. Dopřejte si únik z každodenní rutiny a užívejte si krásu a luxus každého detailu našich procedur a vybavení."},an=[{id:1,image:"./image/gallery/gallery_bath_1.png"},{id:2,image:"./image/gallery/gallery_bath_2.png"},{id:3,image:"./image/gallery/gallery_bath_3.png"},{id:4,image:"./image/gallery/gallery_bath_4.png"},{id:5,image:"./image/gallery/gallery_bath_5.png"},{id:6,image:"./image/gallery/gallery_bath_6.png"}],nn=[{id:1,image:"./image/gallery/gallery_cafe_1.png"},{id:2,image:"./image/gallery/gallery_cafe_2.png"},{id:3,image:"./image/gallery/gallery_cafe_3.png"},{id:4,image:"./image/gallery/gallery_cafe_4.png"},{id:5,image:"./image/gallery/gallery_cafe_5.png"},{id:6,image:"./image/gallery/gallery_cafe_6.png"}],tn=[{id:1,image:"./image/gallery/gallery_proces_1.png"},{id:2,image:"./image/gallery/gallery_proces_2.png"},{id:3,image:"./image/gallery/gallery_proces_3.png"},{id:4,image:"./image/gallery/gallery_proces_4.png"},{id:5,image:"./image/gallery/gallery_proces_5.png"},{id:6,image:"./image/gallery/gallery_proces_6.png"}],sn=[{id:1,image:"./image/gallery/gallery_spa_1.png"},{id:2,image:"./image/gallery/gallery_spa_2.png"},{id:3,image:"./image/gallery/gallery_spa_3.png"},{id:4,image:"./image/gallery/gallery_spa_4.png"},{id:5,image:"./image/gallery/gallery_spa_5.png"},{id:6,image:"./image/gallery/gallery_spa_6.png"}],on=["Masáže","Peelingy","Propařování a zábaly","Ceremonie"],rn=["Masáže","Peelingy","Propařování a zábaly","Ceremonie"],ln=["Masáže","Peelingy","Propařování a zábaly","Ceremonie"],cn=[{id:1,name:"Klasická masáž",price:"1600/2150 Kč",description:"Univerzální technika pro uvolnění svalů, odstranění napětí a zlepšení krevního oběhu. Ideální pro regeneraci celého těla a nalezení rovnováhy mezi fyzickým a emocionálním stavem. Zahrnuje prvky manuální terapie svalů a tkání těla.",duration:"Délka: 60/90 min",image:"./image/type_categories/classic_massage.png"},{id:2,name:"Thajská masáž",price:"1650/2200 Kč",description:"Tradiční masážní technika, která kombinuje prvky akupunktury, jógy a pružného protažení svalů a pojivových tkání. Tato technika je zaměřena na obnovu energetické rovnováhy v těle, odstranění napětí a zlepšení flexibility.",duration:"Délka: 60/90 min",image:"./image/type_categories/thai_massage.png"},{id:3,name:"Sportovní masáž",price:"1650/2400 Kč",description:"Speciální forma masáže vyvinutá pro sportovce ke snížení únavy a přípravě těla na fyzickou zátěž. Používá se k prevenci úrazů, zlepšení svalového tonusu a podpoře regenerace po intenzivním tréninku.",duration:"Délka: 90/120 min",image:"./image/type_categories/sports_massage.png"},{id:4,name:"Aromaterapeutická masáž",price:"1450/2100 Kč",description:"Tato masážní technika využívá éterické oleje k maximální relaxaci a terapeutickému účinku. Éterické oleje jsou vybírány individuálně, pomáhají snižovat stres, zlepšovat náladu a zvyšovat celkovou pohodu těla.",duration:"Délka: 60/90 min",image:"./image/type_categories/aromatherapy_massage.png"}],gn=[{id:1,name:"Cukrový peeling",price:"1200 Kč",description:"Ideální způsob, jak jemně odstranit mrtvé buňky pokožky a dodat jí svěží vzhled. Cukrový peeling má jemnou texturu, která šetrně čistí pokožku bez podráždění. Tento peeling je vhodný pro všechny typy pleti, zejména pro suchou a citlivou pokožku. Cukrové krystaly spolu s vyživujícími oleji zanechávají pokožku hedvábně hladkou, jemnou a hydratovanou. Procedura zanechává pokožku zářivou, pevnou a zdravou.",duration:"Délka: 50 min",image:"./image/type_categories/sugar_peeling.png"},{id:2,name:"Solný peeling",price:"1350 Kč",description:"Hluboce čistící peeling, který odlupuje mrtvé buňky pokožky. Solný peeling účinně odstraňuje odumřelé buňky, stimuluje krevní oběh a zlepšuje celkovou texturu pokožky. Sůl je bohatá na minerály, které pokožku vyživují a regenerují. Tento peeling je zvláště vhodný pro mastnou a problémovou pleť, zanechává pokožku svěží, tonizovanou a zdravou.",duration:"Délka: 60 min",image:"./image/type_categories/salt_peeling.png"},{id:3,name:"Kávový peeling",price:"1350 Kč",description:"Kávový peeling je vynikající způsob, jak dodat vaší pokožce energii a tón. Kávový peeling má antioxidační vlastnosti, které pomáhají bojovat proti známkám stárnutí a zlepšují elasticitu pokožky. Jemně odlupuje a omlazuje pokožku, zanechává ji hladkou a zářivou. Přírodní oleje obsažené v peelingu hluboce vyživují a hydratují pokožku, zanechávají ji jemnou a pružnou.",duration:"Délka: 60 min",image:"./image/type_categories/coffee_peeling.png"}],mn=[{id:1,name:"Finská sauna",price:"1200 Kč",description:"Tento lázeňský postup podporuje hluboké čištění pórů, zlepšuje krevní oběh, uvolňuje napětí a přispívá k celkovému zdraví těla. Procedura se provádí pomocí horkého suchého vzduchu, který je generován speciálními kameny zahřátými v sauně. Když se na kameny nalije voda, rychle se uvolňuje pára, což vytváří krátkodobý zvlhčující účinek.",duration:"Délka: 50 min",image:"./image/type_categories/finnish_sauna.png"},{id:2,name:"Turecký hammam",price:"1350 Kč",description:"Tato tradiční lázeň zajišťuje hluboké čištění a relaxaci prostřednictvím kombinace vysoké teploty a vlhkosti. Intenzivní peeling následovaný masáží celého těla s použitím esenciálních olejů a teplých vodních paprsků revitalizuje pokožku. Procedura pomáhá čistit pokožku, zlepšuje krevní oběh, uvolňuje svaly, snižuje stres a zlepšuje celkové zdraví těla.",duration:"Délka: 60 min",image:"./image/type_categories/turkish_hammam.png"},{id:3,name:"Čokoládový zábal",price:"1050 Kč",description:"Čokoládový zábal je lázeňská procedura, při které se na pokožku nanáší roztavená čokoláda. Procedura hydratuje a vyživuje pokožku, zanechává ji měkkou, hladkou a omlazenou. Čokoládové zábaly také zlepšují krevní oběh, pomáhají v boji proti celulitidě a poskytují uvolňující zážitek.",duration:"Délka: 45 min",image:"./image/type_categories/chocolate_wrapping.png"},{id:4,name:"Mořský zábal",price:"900 Kč",description:"Mořský zábal je lázeňská procedura, při které se na tělo aplikuje speciální směs mořských řas. Procedura pomáhá detoxikovat pokožku, vyživuje ji vitamíny a minerály a zlepšuje její celkovou pružnost. Mořský zábal také stimuluje krevní oběh, snižuje celulitidu a zvyšuje tón pleti.",duration:"Délka: 40 min",image:"./image/type_categories/seaweed_wrapping.png"}],pn=[{id:1,name:"Čajový obřad",price:"1200 Kč",description:"Toto je starobylé umění přípravy a pití čaje, které podporuje vnitřní klid a harmonii. Během obřadu vám naši mistři odhalí jemnosti tradičních metod přípravy čaje a vy si budete užívat lahodnou vůni kvalitního čaje.",duration:"Délka: 60 min",image:"./image/type_categories/tea_ceremony.png"},{id:2,name:"Aromaterapeutický obřad",price:"1350 Kč",description:"Aromaterapeutický obřad je lázeňský rituál, který využívá sílu přírodních esenciálních olejů ke zlepšení fyzické a emocionální pohody. Během obřadu se esenciální oleje rozptylují do vzduchu nebo aplikují na tělo, čímž se vytváří atmosféra klidu a harmonie.",duration:"Délka: 60 min",image:"./image/type_categories/aromatherapy_ceremony.png"}],g={language:oi,blogNews:ri,gallery:li,cafe:ci,signUp:gi,spaTherapy:mi,momentsOfPleasure:pi,contacts:di,aboutUsHeader:ui,aboutUsText1:hi,aboutUsText2:yi,aboutUsText3:_i,aboutUsText4:fi,philosophyHeader:vi,ecoStrategiesTitle:ki,ecoStrategiesText:bi,professionalCareTitle:wi,professionalCareText:ji,individualApproachTitle:Ti,individualApproachText:$i,servicesHeader:Si,categories:Ci,learnMore:Mi,specialistsHeader:xi,specialists:zi,whyUsHeader:Hi,qualityTitle:Pi,qualityDescription:Di,effectivenessTitle:Ui,effectivenessDescription:Ii,safetyTitle:Ai,safetyDescription:Li,OrderHeader:Ni,orderText:Bi,placeholderName:Ei,placeholderEmail:Oi,placeholderPhone:qi,headerBlogNews:Ki,mainBlog:Wi,blogs:Gi,news:Ri,HeaderCafe:Fi,mainCafe:Vi,Desserts:Ji,Coffee:Zi,specialOffers:Yi,tea:Qi,HeaderGallery:Xi,mainGallery:en,Bath:an,Cafe:nn,Process:tn,Spa:sn,Massages:on,Peelings:rn,"Steaming and Wrapping":["Masáže","Peelingy","Propařování a zábaly","Ceremonie"],Ceremonies:ln,typeMassages:cn,typePeelings:gn,typeSteamingWrapping:mn,teaCeremonies:pn};function d(e){return`
    <header class="Header_Second">
        <ul class="Header_Second_list">
            <li class="Header_Second_info">
                <ul class="Header_Second_info_list">
                    <li class="Header_Second_logo">
                        <a href="#" class="Header_Second_link" data-section="main">
                            <img src="${$}" alt="" class="logo">
                        </a>
                        <span class="Header_Second_info_link">
                            Therapy Cup Spa
                        </span>
                    </li>
                </ul>
            </li>
            <li class="Header_Second_navigation">
                <ul class="Header_Second_navigation_list">
                    <li class="Navigation_list_nav">
                        <ul class="navigation_list_nav_list">
                            ${dn(e)}
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </header>
    `}function dn(e){const i=localStorage.getItem("language")||"en";let a=[],n=r[e];switch(i){case"uk":a=c[e];break;case"cz":a=g[e];break;case"en":a=r[e];break}return`
        ${a.map((t,s)=>`
          <li class="Main_Second_Header_navigation_item" data-header-second="${n[s]}">
            <a href="#">${t}</a>
          </li>
        `).join("")}
    `}function L(e){return`
        ${un(e)}
    `}function un(e){switch(e){case"headerBlogNews":return d(e);case"HeaderGallery":return d(e);case"HeaderCafe":return d(e);case"Massages":return d(e);case"Peelings":return d(e);case"Steaming and Wrapping":return d(e);case"Ceremonies":return d(e);case"main":return M();default:return M()}}function hn(){return`
    <footer class="Main_Footer Background_Main_Page_Footer" id="footer">
        <ul class="Main_Footer_list">
            <li class="Main_Footer_headers">
                <h1 data-language="contacts">Контакти</h1>
                <hr>
            </li>
            <li class="Main_Footer_Info">
                <span>Therapy Cup Spa, s.r.o.</span>
                <span>Recepce +420776652345</span>
                <span>IČ: 05682606</span>
                <span>DIČ: CZ05782303</span>
                <span>Fakturační adresa: Na Lysině 678/25, 147 00, Praha 4, Česká republika</span>
            </li>
            <li class="Main_Footer_navigation">
                <ul class="Main_Footer_navigation_list">
                    <li class="Navigation_list_nav">
                        <ul class="navigation_list_nav_list">
                            <li class="Main_Header_navigation_item">
                                <a href="#" data-language="blogNews" data-section="headerBlogNews">Новини i блог</a>
                            </li>
                            <li class="Main_Header_navigation_item">
                                <a href="#" data-language="gallery" data-section="HeaderGallery">Фотогалерея</a>
                            </li>
                            <li class="Main_Header_navigation_item">
                                <a href="#" data-language="cafe" data-section="HeaderCafe">Кав’ярня</a>
                            </li>
                        </ul>
                    </li>
                    <li class="Main_Footer_navigation_contacts">
                        <ul class="Navigation_contacts_list">
                            <li class="contacts_item"><a href="#"><img src="${I}" alt="" class="contacts_item_img"></a></li>
                            <li class="contacts_item"><a href="#"><img src="${U}" alt="" class="contacts_item_img"></a></li>
                            <li class="contacts_item"><a href="#"><img src="${A}" alt="" class="contacts_item_img"></a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="Main_Footer_info">
                <ul class="Main_Footer_info_list">
                    <li class="Main_info_logo">
                        <a href="#" class="Main_info_link" data-section="main">
                            <img src="${$}" alt="" class="logo">
                        </a>
                        <span class="Main_info_link">
                            Therapy Cup Spa
                        </span>
                    </li>
                </ul>
            </li>
        </ul>
    </footer>
    `}const S=""+new URL("../icon/checkmark.svg",import.meta.url).href,yn=""+new URL("../image/info_gallery/info_gallery_1.png",import.meta.url).href,_n=""+new URL("../image/info_gallery/info_gallery_2.png",import.meta.url).href,fn=""+new URL("../image/info_gallery/info_gallery_3.png",import.meta.url).href;function vn(){return`
        <section class="Main_About_Us Block_content">
            <ul class="Main_About_Us_list">
                <li class="Main_headers">
                    <h1 data-language="aboutUsHeader">
                    </h1>
                    <hr>
                </li>
                <li class="Main_About_Us_info">
                    <ul class="Main_About_Us_info_list">
                        <li class="Main_About_Us_info_text">
                            <ul class="info_text_list">
                                <li class="info_text_item">
                                    <span class="empty_box"></span>
                                    <span data-language="aboutUsText1"></span>
                                </li>
                                <li class="info_text_item">
                                    <img src="${S}" alt="">
                                    <span data-language="aboutUsText2">
                                    </span>
                                </li>
                                <li class="info_text_item">
                                    <img src="${S}" alt="">
                                    <span data-language="aboutUsText3">
                                    </span>
                                </li>
                                <li class="info_text_item">
                                    <img src="${S}" alt="">
                                    <span data-language="aboutUsText4">
                                    </span>
                                </li>
                            </ul>
                        </li>
                        <li class="Main_About_Us_info_gallery">
                            <ul class="Main_About_Us_info_gallery_list">
                                <li class="info_gallery_item">
                                    <img src="${yn}" alt="">
                                </li>
                                <li class="info_gallery_item">
                                    <img src="${_n}" alt="">
                                </li>
                                <li class="info_gallery_item">
                                    <img src="${fn}" alt="">
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    `}const kn=""+new URL("../icon/individual_approach.svg",import.meta.url).href,bn=""+new URL("../icon/professional_care.svg",import.meta.url).href,wn=""+new URL("../icon/eco_strategies.svg",import.meta.url).href;function jn(){return`
    <section class="Main_Philosophy Block_content">
            <ul class="Main_Philosophy_list">
                <li class="Main_headers">
                    <h1 data-language="philosophyHeader">
                    </h1>
                    <hr>
                </li>
                <li class="Main_Philosophy_content">
                    <ul class="Main_Philosophy_content_list">
                        <li class="Content_item">
                            <img src="${wn}" alt="">
                            <h2 data-language="ecoStrategiesTitle"></h2>
                            <span data-language="ecoStrategiesText"></span>
                        </li>
                        <li class="Content_item">
                            <img src="${bn}" alt="">
                            <h2 data-language="professionalCareTitle"></h2>
                            <span data-language="professionalCareText"></span>
                        </li>
                        <li class="Content_item">
                            <img src="${kn}" alt="">
                            <h2 data-language="individualApproachTitle"></h2>
                            <span data-language="individualApproachText"></span>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    `}function Tn(){const e=localStorage.getItem("language")||"en";let i=[],a="";switch(e){case"uk":i=c.categories,a=c.servicesHeader;break;case"cz":i=g.categories,a=g.servicesHeader;break;case"en":i=r.categories,a=r.servicesHeader;break}const n=r.categories;return`
    <section class="Main_Spa_Categories Block_content">
      <ul class="Main_Spa_Categories_list">
        <li class="Main_headers">
          <h1 data-language="servicesHeader">${a}</h1>
          <hr>
        </li>
        <li class="Main_Spa_Categories_content">
          <ul class="Main_Spa_Categories_content_list">
            ${i.map((t,s)=>{const o=n[s];return`
                  <li class="Main_Spa_Categories_content_item">
                    <ul class="Categories_content_item_list">
                      <li class="item_image">
                        <img src="${t.image}" alt="${t.name}" class="Category_img">
                      </li>
                      <li class="item_header">
                        <h2 data-language="categories.name-${t.id}">${t.name}</h2>
                      </li>
                      <li class="item_category_description">
                        <span class="item_description_text" data-language="categories.description-${t.id}">${t.description}</span>
                      </li>
                      <li class="item_info">
                        <a href="${t.moreInfoUrl}" class="Category_More_Info" data-language="learnMore"  data-section="${o.name}">Дізнатися більше</a>
                        <a href="#order-form-section" class="Category_Link_Sign_Up" data-language="signUp">Записатись</a>
                      </li>
                    </ul>
                  </li>
                `}).join("")}
          </ul>
        </li>
      </ul>
    </section>
  `}const x={en:r,uk:c,cz:g};function $n(){const e=localStorage.getItem("language")||"en",i=x[e].specialists;return`
    <section class="Main_Massage_Therapist Block_content">
      <ul class="Main_Massage_Therapist_list">
        <li class="Main_headers">
          <h1 data-language="specialistsHeader">${x[e].specialistsHeader}</h1>
          <hr>
        </li>
        <li class="Main_Massage_Therapist_content">
          <ul class="Main_Massage_Therapist_content_list">
            ${i.map(n=>`
              <li class="Massage_Therapist_content_item">
                <img src="${n.image}" alt="${n.name}" class="Massage_Therapist_img">
                <ul class="content_item_info_list">
                  <li class="content_item_info">
                    <span class="content_item_name" data-language="therapist.name-${n.id}">${n.name} </span>
                    <ul class="content_item_position_list">
                        <li class="content_item_position">
                          <span data-language="therapist.role-${n.id}">${n.role}</span>
                        </li>
                    </ul>
                  </li>
                  <li class="content_item_sign_up">
                    <a href="#order-form-section" class="therapist_link_sign_up" data-language="signUp">Записатись</a>
                  </li>
                </ul>
              </li>
            `).join("")}
          </ul>
        </li>
      </ul>
    </section>
  `}function Sn(){return`
    <section class="Main_Why_Us">
            <ul class="Main_Why_Us_list">
                <li class="Main_Why_Us_header">
                    <h1 data-language="whyUsHeader">
                    </h1>
                    <hr>
                </li>
                <li class="Main_Why_Us_content">
                    <ul class="Main_Why_Us_content_list">
                        <li class="Main_Why_Us_content_item">
                            <h2 data-language="qualityTitle"></h2>
                            <span data-language="qualityDescription"></span>
                        </li>
                        <li class="Main_Why_Us_content_item">
                            <h2 data-language="effectivenessTitle"></h2>
                            <span data-language="effectivenessDescription"></span>
                        </li>
                        <li class="Main_Why_Us_content_item">
                            <h2 data-language="safetyTitle"></h2>
                            <span data-language="safetyDescription"></span>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    `}function Cn(){return`
          <section class="Main_Order Block_content" id="order-form-section">
            <ul class="Main_Order_list">
                <li class="Main_headers">
                    <h1 data-language="OrderHeader"></h1>
                    <hr>
                </li>
                <li class="Order_main_list">
                    <ul class="Order_form_list">
                        <li class="Order_form_item">
                            <h2 class="order_form_header" data-language="orderText"></h2>
                            <form id="order-form" class="order_form">
                                <input type="text" id="from_name" name="from_name" placeholder="Ваше ім'я" data-language="placeholderName" required>
                                <input type="email" id="from_email" name="from_email" placeholder="Ваш email" data-language="placeholderEmail" required>
                                <input type="text" id="from_phone" name="from_phone" placeholder="Ваш телефон" data-language="placeholderPhone" required>
                                <button type="submit" data-language="signUp">Записатися</button>
                            </form>
                        </li>
                        <li class="Review_image_item">
                            <img src="${$}" alt="" class="Review_image">
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    `}function z(){return`
        ${vn()}
        ${jn()}
        ${Tn()}
        ${$n()}
        ${Sn()}
        ${Cn()}
    `}const _={en:r,uk:c,cz:g};function u(e){let i=localStorage.getItem("language")||"uk",a={};switch(e){case"Massages":a=_[i].typeMassages;break;case"Peelings":a=_[i].typePeelings;break;case"Steaming and Wrapping":a=_[i].typeSteamingWrapping;break;case"Ceremonies":a=_[i].teaCeremonies;break;default:a=_[i].typeMassages}return`
    <div class="TypeCategories_main_list">
        <ul class="TypeCategories_list">
            ${a.map(n=>`
                <li class="TypeCategory_item">
                    <ul class="TypeCategory_item_list">
                        <li class="item_image">
                            <img src="${n.image}" alt="" class="TypeCategory_img">
                        </li>
                        <li class="item_header">
                            <h2>${n.name}</h2>
                        </li>
                        <li class="item_type_category_description">
                            <span>${n.description}</span>
                        </li>
                        <li class="item_price_duration">
                            <ul class="item_price_duration_list">
                                <li class="item_info">
                                    <span>${n.duration}</span>
                                </li>
                                <li class="item_info">
                                    <span>${n.price}</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            `).join("")}
        </ul>
    </div>
  `}function b(e){return`
      ${u(e)}
  `}function w(){document.querySelectorAll("[data-header-second]").forEach(e=>{e.addEventListener("click",i=>{i.preventDefault(),document.querySelectorAll("[data-header-second]").forEach(t=>{t.classList.remove("Active")}),e.classList.add("Active");const a=e.dataset.headerSecond,n=document.getElementById("content-container");if(n)switch(a){case"Massages":n.innerHTML=u(a);break;case"Peelings":n.innerHTML=u(a);break;case"Steaming and Wrapping":n.innerHTML=u(a);break;case"Ceremonies":n.innerHTML=u(a);break;default:n.innerHTML=u(a)}})})}const C={en:r,uk:c,cz:g};function H(e){let i=localStorage.getItem("language")||"uk",a={};switch(e){case"Blog":a=C[i].blogs;break;case"News":a=C[i].news;break;default:a=C[i].blogs}return`
    <div class="BlogNewsCategories_main_list">
        <ul class="BlogNewsCategories_list">
          ${a.map(n=>`
                <li class="BlogNewsCategories_item">
                    <h1>${n.blogHeader}</h1>
                    <ul class="BlogNewsCategories_item_list">
                        <li class="item_image">
                            <img src="${n.blogMainImg}" alt="" class="BlogNewsCategories_img">
                        </li>
                        <li class="item_description">
                            <span>${n.blogDescription}</span>
                            <img src="${n.blogtextImg}" alt="" class="BlogNewsCategories_small_img">
                        </li>
                    </ul>
                </li>
          `).join("")}
        </ul>
    </div>
  `}const Mn=""+new URL("../image/blogNews/main_blog_news.png",import.meta.url).href,xn=""+new URL("../image/blogNews/blog_image_1.png",import.meta.url).href,zn=""+new URL("../image/blogNews/blog_image_2.png",import.meta.url).href,Hn={en:r,uk:c,cz:g};function N(){const e=localStorage.getItem("language")||"en",i=Hn[e].mainBlog;return`
<div class="Blog_news_main">
    <img src="${Mn}" alt="" class="Blog_news_main_image">
    <ul class="Blog_news_main_list">
        <li class="Blog_news_main_header">
            <h1>${i.mainBlogHeader}</h1>
        </li>
        <li class="Blog_news_main_info">
            <img src="${xn}" alt="" class="image_blog_news_left">
            <span>${i.mainBlogText}</span>
            <img src="${zn}" alt="" class="image_blog_news_right">
        </li>
    </ul>
</div>
    `}function Pn(){return`
      ${N()}
  `}function Dn(){document.querySelectorAll("[data-header-second]").forEach(e=>{e.addEventListener("click",i=>{i.preventDefault(),document.querySelectorAll("[data-header-second]").forEach(t=>{t.classList.remove("Active")}),e.classList.add("Active");const a=e.dataset.headerSecond,n=document.getElementById("content-container");if(n)switch(a){case"Blog":n.innerHTML=H(a);break;case"News":n.innerHTML=H(a);break;default:n.innerHTML=N()}})})}const f={en:r,uk:c,cz:g};function j(e){let i=localStorage.getItem("language")||"uk",a={};switch(e){case"Desserts":a=f[i].Desserts;break;case"Coffee":a=f[i].Coffee;break;case"Special Offers":a=f[i].specialOffers;break;case"Teas":a=f[i].tea;break;default:a=f[i].Desserts}return`
    <div class="TypeCafeCategories_main_list">
        <ul class="TypeCafeCategories_list">
            ${a.map(n=>`
                <li class="TypeCafeCategories_item">
                    <ul class="TypeCafeCategories_item_list">
                        <li class="item_image">
                            <img src="${n.image}" alt="" class="TypeCafeCategories_img">
                        </li>
                        <li class="item_header">
                            <h2>${n.name}</h2>
                            <h2>${n.price}</h2>
                        </li>
                        <li class="item_composition">
                            <span>${n.ingredients}</span>
                        </li>
                        <li class="item_cafe_description">
                            <span>${n.description}</span>
                        </li>
                    </ul>
                    </li>
                `).join("")}
        </ul>
    </div>
  `}const Un=""+new URL("../image/cafe/cafe_image.png",import.meta.url).href,P=""+new URL("../image/cafe/image_coffe.png",import.meta.url).href,In={en:r,uk:c,cz:g};function B(){const e=localStorage.getItem("language")||"en",i=In[e].mainCafe;return`
  

<div class="Cafe_main">
    <img src="${Un}" alt="" class="Cafe_main_image">
    <ul class="Cafe_main_list">
        <li class="Cafe_main_header">
            <h1>${i.mainCafeHeader}</h1>
        </li>
        <li class="Cafe_main_info">
            <img src="${P}" alt="" class="image_coffe_left">
            <span>${i.mainCafeText}</span>
            <img src="${P}" alt="" class="image_coffe_right">
        </li>
    </ul>
</div>
    `}function An(){return`
      ${B()}
  `}function Ln(){document.querySelectorAll("[data-header-second]").forEach(e=>{e.addEventListener("click",i=>{i.preventDefault(),document.querySelectorAll("[data-header-second]").forEach(t=>{t.classList.remove("Active")}),e.classList.add("Active");const a=e.dataset.headerSecond,n=document.getElementById("content-container");if(n)switch(a){case"Desserts":n.innerHTML=j(a);break;case"Coffee":n.innerHTML=j(a);break;case"Special Offers":n.innerHTML=j(a);break;case"Teas":n.innerHTML=j(a);break;default:n.innerHTML=B()}})})}const v={en:r,uk:c,cz:g};function T(e){let i=localStorage.getItem("language")||"uk",a={};switch(e){case"Bath":a=v[i].Bath;break;case"Cafe":a=v[i].Cafe;break;case"Process":a=v[i].Process;break;case"Spa":a=v[i].Spa;break;default:a=v[i].Bath}return`
    <div class="GalleryCategories_main_list">
        <ul class="GalleryCategories_list">
            ${a.map(n=>`
                <li class="GalleryCategories_item">
                    <img src="${n.image}" alt="" class="GalleryCategories_img">
                </li>
                `).join("")}
        </ul>
    </div>
  `}const Nn=""+new URL("../image/gallery/gallery_main.png",import.meta.url).href,Bn=""+new URL("../image/gallery/gallery_small_1.png",import.meta.url).href,En=""+new URL("../image/gallery/gallery_small_2.png",import.meta.url).href,On={en:r,uk:c,cz:g};function E(){const e=localStorage.getItem("language")||"en",i=On[e].mainGallery;return`
  <div class="Gallery_main">
    <img src="${Nn}" alt="" class="Gallery_main_image">
    <ul class="Gallery_main_list">
        <li class="Gallery_main_header">
            <h1>${i.mainGalleryHeader}</h1>
        </li>
        <li class="Gallery_main_info">
            <img src="${Bn}" alt="" class="image_gallery_left">
            <span>${i.mainGalleryText}</span>
            <img src="${En}" alt="" class="image_gallery_right">
        </li>
    </ul>
</div>
    `}function qn(){return`
      ${E()}
  `}function Kn(){document.querySelectorAll("[data-header-second]").forEach(e=>{e.addEventListener("click",i=>{i.preventDefault(),document.querySelectorAll("[data-header-second]").forEach(t=>{t.classList.remove("Active")}),e.classList.add("Active");const a=e.dataset.headerSecond,n=document.getElementById("content-container");if(n)switch(a){case"Bath":n.innerHTML=T(a);break;case"Cafe":n.innerHTML=T(a);break;case"Process":n.innerHTML=T(a);break;case"Spa":n.innerHTML=T(a);break;default:n.innerHTML=E()}})})}function O(e){return`
    <main class="Main_Page" id="content-container">
        ${Wn(e)}
    </main>
  `}function Wn(e){switch(e){case"headerBlogNews":return setTimeout(Dn,0),Pn();case"HeaderGallery":return setTimeout(Kn,0),qn();case"HeaderCafe":return setTimeout(Ln,0),An();case"Massages":return setTimeout(w,0),b(e);case"Peelings":return setTimeout(w,0),b(e);case"Steaming and Wrapping":return setTimeout(w,0),b(e);case"Ceremonies":return setTimeout(w,0),b(e);case"main":return z();default:return z()}}const Gn={en:r,uk:c,cz:g};let q=localStorage.getItem("language")||"uk";function Rn(e){q=e,localStorage.setItem("language",e),K()}function K(){const e=Gn[q];document.querySelectorAll("[data-language]").forEach(i=>{const a=i.getAttribute("data-language");a.startsWith("categories.")?Vn(a,e,i):a.startsWith("therapist.")?Jn(a,e,i):e[a]&&(i.tagName==="INPUT"?i.placeholder=e[a]:i.textContent=e[a])})}function Fn(){const e=document.querySelector(".language-button"),i=document.querySelector(".language-menu");e&&i&&(e.addEventListener("click",a=>{a.stopPropagation(),i.style.display=i.style.display==="none"?"flex":"none",e.style.display="none"}),document.querySelectorAll(".language-menu-item").forEach(a=>{a.addEventListener("click",n=>{const t=n.target.getAttribute("data-lang");Rn(t),i.style.display="none",e.textContent=t.toUpperCase(),e.style.display="flex"})}),document.addEventListener("click",a=>{!e.contains(a.target)&&!i.contains(a.target)&&(i.style.display="none")}))}function Vn(e,i,a){const[n,t]=e.split("."),[s,o]=t.split("-");if(Array.isArray(i.categories)){const m=i.categories.find(l=>l.id===parseInt(o,10));m&&m[s]&&(a.textContent=m[s])}}function Jn(e,i,a){const[n,t]=e.split("."),[s,o]=t.split("-");if(Array.isArray(i.specialists)){const m=i.specialists.find(l=>l.id===parseInt(o,10));m&&m[s]&&(a.textContent=m[s])}}const Zn="modulepreload",Yn=function(e,i){return new URL(e,i).href},D={},Qn=function(i,a,n){let t=Promise.resolve();if(a&&a.length>0){const s=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),m=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));t=Promise.all(a.map(l=>{if(l=Yn(l,n),l in D)return;D[l]=!0;const h=l.endsWith(".css"),G=h?'[rel="stylesheet"]':"";if(!!n)for(let y=s.length-1;y>=0;y--){const k=s[y];if(k.href===l&&(!h||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${G}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":Zn,h||(p.as="script",p.crossOrigin=""),p.href=l,m&&p.setAttribute("nonce",m),document.head.appendChild(p),h)return new Promise((y,k)=>{p.addEventListener("load",y),p.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${l}`)))})}))}return t.then(()=>i()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};function Xn(){const e=document.getElementById("order-form");e&&e.addEventListener("submit",function(i){i.preventDefault(),Qn(()=>import("./email.d2JJKO86.js"),[],import.meta.url).then(()=>{const a=document.getElementById("from_name").value,n=document.getElementById("from_email").value,t=document.getElementById("from_phone").value,s={from_name:a,from_email:n,from_phone:t};emailjs.send("service_16rukhh","template_5tn31u6",s).then(function(o){console.log("SUCCESS!",o.status,o.text),alert("Email sent successfully!")},function(o){console.log("FAILED...",o),alert("Failed to send email.")})}).catch(a=>{console.error("Ошибка при загрузке email.js",a)})})}function W(e,i){document.querySelector("#app").innerHTML=`
    ${i}
    ${e}
    ${hn()}
  `,et(),Fn(),K()}function et(){document.querySelectorAll("[data-section]").forEach(e=>{e.addEventListener("click",i=>{i.preventDefault();const a=i.target.dataset.section;let n=O(a),t=L(a);W(n,t)})}),Xn()}document.addEventListener("DOMContentLoaded",()=>{W(O(),L())});
