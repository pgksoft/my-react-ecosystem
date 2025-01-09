type TUsefulLink = { title: string; href: string };

type TInfoLecture = {
  lectureTitle: string;
  usefulLinks: TUsefulLink[];
  about?: string[];
};

export default TInfoLecture;
