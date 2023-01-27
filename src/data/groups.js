//!--------------------------------------- technical ---------------------------------------
import Technical_Image from "../images/group-image/Technical/Main.jfif";
// data science
import DataScience_Image from "../images/group-image/Technical/Data Science .jpg";
import DataScience_Icon from "../images/Group-icon/Data-Science.png";
// ui ux
import UiUx_Image from "../images/group-image/Technical/UI&UX.jpg";
import UiUx_Icon from "../images/Group-icon/UI-UX.png";
// frontend
import Frontend_Image from "../images/group-image/Technical/Front End.png";
import Frontend_Icon from "../images/Group-icon/Front-Media.png";
// backend
import Backend_Image from "../images/group-image/Technical/Back-end.png";
import Backend_Icon from "../images/Group-icon/Backend.png";
// flutter
import Flutter_Image from "../images/group-image/Technical/Flutter.jpg";
import Flutter_Icon from "../images/Group-icon/flutter.png";
// ui ux
import CyberSecurity_Image from "../images/group-image/Technical/Cyber-Security.jpg";
import CyberSecurity_Icon from "../images/Group-icon/Cyber Security.png";

//!--------------------------------------- non-technical ---------------------------------------
import NonTechnicalImage from "../images/group-image/non-Technical/Main.jfif";
// PR
import PR_Image from "../images/group-image/non-Technical/PR.jpg";
import PR_Icon from "../images/Group-icon/PR.png";
// HR
import HR_Image from "../images/group-image/non-Technical/HR.jpg";
import HR_Icon from "../images/Group-icon/HR-ProblemSolving.png";
// PM
import PM_Image from "../images/group-image/non-Technical/PM.jpg";
import PM_Icon from "../images/Group-icon/PM.png";
// LOC
import LOC_Image from "../images/group-image/non-Technical/LOC.png";
import LOC_Icon from "../images/Group-icon/LOC.png";
// Media
import Media_Image from "../images/group-image/non-Technical/Media.jpg";
import Media_Icon from "../images/Group-icon/Front-Media.png";

//!--------------------------------------- Study Groups ---------------------------------------
import StudyGroups from "../images/group-image/Study Group/Main.jfif";
// OOP
import OOP_Image from "../images/group-image/Study Group/OOP.jpg";
import OOP_Icon from "../images/Group-icon/oop.png";
// Problem Solving
import ProblemSolving_Image from "../images/group-image/Study Group/problem solving.jpg";
import ProblemSolving_Icon from "../images/Group-icon/problem Solving.png";
// English
import English_Image from "../images/group-image/Study Group/English.png";
import English_Icon from "../images/Group-icon/English.png";
// Database
import Database_Image from "../images/group-image/Study Group/DataBase.jpg";
import Database_Icon from "../images/Group-icon/database.png";

const groupsPage = {
  intro: [
    "فترة الحياة الجامعية من أصعب و أهم الفترات اللي بتمر عليك في مسيرة حياتك ، كتير مننا مش بيكون قادر انه يستغلها صح . هدفنا الأساسي اننا نخلق تجربة مميزة ، مفيدة مثمرة في كافة النواحي ، تعود بالنفع والفائدة ليك ولغيرك ومساعدتك في تحديد طريقك في التكنيكال واكتسابك خبرات تأهلك للحياة العملية بعد التخرج . أخيراً ، عايز تكون جزء من مجتمع كبير هدفه انه يساعد الناس ويسيب أثر ، شايف انك شخص مؤثر وتقدر تفيد غيرك ؟ ، نفسك تطور من نفسك ومهاراتك وتكون أفضل نسخة من نفسك؟ هتقدر انك تحقق كل دا واكتر من خلال تواجدك معانا في بيئة تسمح ليك بالتطور واكتساب المهارات في كافة النواحي ، وجودك هيضيف لينا وليك كتير جدا و تقدر انك تفيد وتؤثر في حياة غيرك وتترك أثر طيب وتفيد وتستفيد",
  ],
  groups: [
    {
      name: "Technical",
      animation: "fade-right",
      img: Technical_Image,
      cards: [
        {
          img: DataScience_Image,
          title: "Data Science",
          icon: DataScience_Icon,
          roadmap:
            "https://github.com/mohammadashour123/Data-Science-Roadmap-2022",
          content: [
            "ال Data Science هو مجال بيختص بكل ماله علاقة بالبيانات, سواء مُنظمة او لا، سواء محتاجة شوية تجهيز الأول او لا.",
            "و هي عبارة عن عمليه بيتم استخدام الداتا فيها عشان تقدر تحصل علي معلومات و استنتاجات حدثت في الماضي",
            "وما هي احتماليه انها تحدث وتتكرر في المستقبل عن طريق الذكاء الاصطناعي و تفرعاته .",
          ],
        },
        {
          img: UiUx_Image,
          title: "UI/UX",
          icon: UiUx_Icon,
          roadmap: "https://github.com/MennaElgyar/UI-UX-Roadmap",
          content: [
            "خلينا نفهم الفرق بينهم :",
            "واجهة المستحدم (UI): تركز على الشكل و المضمون و العرض التقديمي و تفاعل المنتج",
            "تجربة المستخدم (UX): بتبدا معايا من اول تحديد ايه هى المشكلة ونحط حلول ليها وصولا لل UI ,ال UI يعتبر جزء من ال Ux بحيث انى وصلت لفكره اقدر احولها لتصميم بيشمل تجربة المستخدم وتحقق ليه فائده وفاعلية كبيرة",
          ],
        },
        {
          img: Frontend_Image,
          title: "Front End",
          icon: Frontend_Icon,
          roadmap:
            "https://github.com/KerolesMichael/Front-End-Roadmap-EGI-TEAM",
          content: [
            "بعد الكتير من التطويرات في مجال الويب ظهر عندنا مجال أساسي هو مجال ال Front End",
            "ال Front End Developer هو الشخص اللي بيقدر يتعامل مع اللي المستخدم بيشوفه",
            "وبيتفاعل معاه في ال Browser اللي هو بيستخدمه سواء جوجل كروم او غيره زي مثلا النصوص والألوان والصور والازرار وغيرها",
          ],
        },
        {
          img: Backend_Image,
          title: "Back-end",
          icon: Backend_Icon,
          roadmap: "https://github.com/AhmedElGarhy1/EGI-Backend-Roadmap",
          content: [
            "الـ Back-end هو الجزء الذي لا تراه في الموقع",
            "فهو مسئول عن تخزين وتنظيم البيانات والتأكد من أن كل شئ في واجهة الموقع بشكل كويس.",
            "الـ Back-end مهمته انه يقوم بالتواصل مع ال Front-end او واجهة الموقع فيقوم بإرسال واستقبال المعلومات والبيانات وحفظها ف ال Database ثم يعرضها في الموقع.",
          ],
        },
        {
          img: Flutter_Image,
          title: "Flutter",
          icon: Flutter_Icon,
          roadmap:
            "https://tarry-dragon-ce0.notion.site/Flutter-RoadMap-4edccb1190b244dbb1da8eae8f82941e",
          content: [
            "ال Flutter واحدة من افضل اللغات المستخدمة في برمجة تطبيقات الهواتف الذكية ، و ذلك لما تحتويه من الكثير من المميزات و الاضافات الرائعة.",
            "فلاتر تتيح ليك انشاء تطبيقات تعمل على نظام الاندرويد و ال IOS وايضا تطبيقات سطح المكتب او ال Desktop .لذلك تعتبر Flutter من أهم و أقوي ال Technologies الموجودة في سوق العمل.",
          ],
        },
        {
          img: CyberSecurity_Image,
          title: "Cyber Security",
          icon: CyberSecurity_Icon,
          roadmap:
            "https://www.notion.so/Cyber-Security-RoadMap-05707c659cc94a2bab22548c0047a0a5",
          content: [
            "ل Cyber Security هو فرع من فروع التكنولوجيا مهمته:",
            "انه يقوم بحماية الأنظمة والممتلكات والشبكات والبرامج من الهجمات الرقمية",
            "اللي هدفها في كثير من الأحيان الوصول إلى المعلومات الحساسة والسرية ل اي منظمة ، أو تغييرها أو إتلافها أو ابتزاز المستخدمين للحصول على الأموال أو تعطيل العمليات التجارية.",
          ],
        },
        {
          img: Media_Image,
          icon: Media_Icon,
          title: "Media Committee",
          roadmap:
            "https://pleasant-barberry-3e7.notion.site/681225e2cdfb4035874f5d32f5def2df?v=2e044e20aa99424f9d6e6f73c6a842c7",
          content: [
            "⁃ دي لجنة بتقوم بتغطية ال Events و الاحداث المهمة في الكلية و مسؤلة عن تصوير كل حاجه خاصة بالتيم.",
            "⁃ مسئولة عن أي Design بيطلع او اي شئ مرئي انت بتعمله.",
            "⁃ مسئوله عن المونتاج وال Video Editing",
          ],
        },
      ],
    },
    {
      name: "Non-Technical",
      animation: "fade-up",
      img: NonTechnicalImage,
      cards: [
        {
          img: PR_Image,
          icon: PR_Icon,
          title: "Public Relations",
          content: [
            "ال PR هو اختصار ل Public Relations دا الشخص المسئول عن واجهة التيم وهو حلقة الوصل بين التيم وبين اي مؤسسة خارجية سواء تيمات تانيين او شركات او جامعات.",
            "- مهمته انه ازاي يعرف الناس احنا مين؟وبنعمل وايه هو هدفنا و رؤيتنا.",
            "- هو مسئول عن توفير القاعات لل events والتنسيق مع ال speakers لل events وال sessions.",
          ],
        },
        {
          img: HR_Image,
          icon: HR_Icon,
          title: "Human Resources",
          content: [
            "ايه هي مهام ال HR ؟",
            "- هو الشخص المسئول عن تنمية المهارات الشخصية لكل فرد في التيم .",
            "- هو الشخص اللي بيعمل ال interviews",
            "- هو مسئول عن تقييم أعضاء التيم ومتابعه مستوى التقدم الخاص بيهم وتطويرهم ل نفسهم.",
          ],
        },
        {
          img: PM_Image,
          icon: PM_Icon,
          title: "Project Management",
          content: [
            "كل شيء في حياتنا يحتاج تخطيط و إدارة ، ومعرفتك بمبادئ التخطيط والإدارة هيفرق معاد جدا في حياتك وفي تحقيق أهدافك .",
            " ال PM هو اختصار ل Project Management ، وهي اللجنة المسئولة",
            "عن تنظيم وإعداد أي حدث خاص بالتيم سواء حدث داخلي او خارجي وتلبية احتياجات أعضاء التيم بالإضافة ل احتياجات الطلاب من سيشنز و Events.",
          ],
        },
        {
          img: LOC_Image,
          icon: LOC_Icon,
          title: "Logistics & Organization (LOC)",
          content: [
            "لجنة الحركه والنشاط",
            " هما مسئولين عن تنظيم وتجهيز الايفينت من كل النواحي ، بالنسبة للمكان والمواد الخام المستخدمة، والتنظيم أثناء الايفينت",
            "بيوفروا كل المعلومات الخاصة بمحتوي الايفينت، بيحولوا المواد الخام لحاجات تطلع الايفينت بشكل كويس جدا",
          ],
        },
      ],
    },
    {
      name: "Study Groups",
      animation: "fade-left",
      img: StudyGroups,
      cards: [
        {
          img: OOP_Image,
          icon: OOP_Icon,
          title: "OOP",
          content: [
            "“The object-oriented model makes it easy to build up programs by accretion.What this often means, in practice, is that it provides a structured way to write spaghetti code.”",
            "• يستخدم مفهوم البرمجة كائنية التوجه، والسبب في استخدام البرمجة كائنية التوجه في الكود هو زيادة قابلية إعادة الاستخدام وقابلية قراءة الكود. هناك العديد من المبادئ التي تعمل في البرمجة كائنية التوجه . مثل الوراثة .",
            "• في جميع الشركات الدولية ومؤسسات البرمجيات ، نجد مفهوم البرمجة 'كائنية التوجه، وهو موجود بشكل أساسي والعديد من الانترفيوز .",
          ],
        },
        {
          img: ProblemSolving_Image,
          icon: ProblemSolving_Icon,
          title: "Problem Solving",
          content: [
            "“If I had an hour to solve a problem I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions.”",
            "• يمكّننا حل المشكلات من تحديد واستغلال الفرص في الحياة ومجال هندسة البرمجيات . تعد مهارات حل المشكلات وعملية حل المشكلات جزءًا مهمًا من الحياة اليومية كأفراد ومؤسسات .",
            "• تدور البرمجة حول حل المشكلات ، من خلال حل مشكلات البرمجة نحاول تطوير مهاراتنا وممارساتنا البرمجية وتحسينها .",
          ],
        },
        {
          img: English_Image,
          icon: English_Icon,
          title: "English",
          content: [
            "“You can never understand one language until you understand at least two”",
            "• اللغة الانجليزية من اللغات المهمة جدا على مستوى العالم وخاصة في مجال البرمجيات ، إن إتقان اللغة الإنجليزية يساعدنا في الحصول على المزيد من الفرص في الحياة ،أولاً وقبل كل شيء ، حياتنا المهنية.",
            " • نحاول التميز مع أعضاء فريقنا من خلال ممارسة اللغة الإنجليزية وتوفير بيئة تساعد على تطوير اللغة الإنجليزية وتحسينها وإتقانها نظرًا لأهميتها في حياتنا ومجالنا.",
          ],
        },
        {
          img: Database_Image,
          icon: Database_Icon,
          title: "Database",
          content: [
            "“Data are just summaries of thousands of stories—tell a few of those stories to help make the data meaningful.”",
            "• قواعد البيانات هي مجموعات من المعلومات المنظمة التي يمكن الوصول إليها وإدارتها وتحديثها بسهولة. تعد أنظمة قواعد البيانات ضرورية لعملك لأنها تنقل المعلومات المتعلقة بمعاملات المبيعات و المنتجات وملفات تعريف العملاء وأنشطة التسويق.",
          ],
        },
      ],
    },
  ],
};

export default groupsPage;
