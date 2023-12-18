
export interface cardProps {
    title : string,
    subtitle : string,
    description : string,
    imgUrl ? : string,
    techs : string[]
    }
export const projectsData: cardProps[] = [
    
  {
    title: "Caser",
    subtitle: "Insurance Agent Web",
    description: "Created and mantained multiple functionalities for the web tool that the agents would use for the creation of new policies.",
    techs: ["hello", "java"],
    imgUrl : 'caser.png'
  },
  {
      title: "AXA",
      subtitle: "Human Rersources Tracker",
      description: "Created from scratch a web tool for the Human Resources Team at Axa.",
      techs: ["Angular", "Java","Sass","Bootstrap","SQL"],
      imgUrl : 'axa.png'
    },

    {
      title: "Vodafone",
      subtitle: "Vodafone Web Client Page",
      description: "Mentored juniors and developed components for the Vodafone web client.",
      techs: ["hello", "java"],
      imgUrl : 'vodafone.png'
    },
    {
      title: "Deutsche Telekom",
      subtitle: "Automated Testing",
      description: "Created and mantained automated tests for the phone app of Deutsche Telekom while also acting like a bridge for an international Scrum team",
      techs: ["hello", "java"],
      imgUrl : 'telekom.png'
    },
    {
      title: "Comboni College",
      subtitle: "Mentorship",
      description: "Mentored a group of last year students towards building their first software.",
      techs: ["hello", "java"],
      imgUrl : 'comboni.png'
    },
    {
      title: "BBVA",
      subtitle: "Fintech web tool Developer",
      description: "Converted a legacy app from JSP and Java to a more modern Angular framework",
      techs: ["hello", "java"],
      imgUrl : 'bbva.png'
    },
  ];