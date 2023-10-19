//Team Data
const team = [
    {
      id: "anna",
      fullName: "Anna Kendrick",
      jobTitle: "Front-end Ninja",
      bio:
        "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
      avatar: "/Session5/Avataars/annakendrick.svg"
    },
    {
      id: "harry",
      fullName: "Harry Fawn",
      jobTitle: "Illustrator",
      bio:
        "Creates new illustrations each week, will kill for coffee, and loves beaches",
      avatar: "/Session5/Avataars/harryfn.svg"
    },
    {
      id: "sofia",
      fullName: "Sofia Sultan",
      jobTitle: "Backend Engineer",
      bio:
        "Donuts over waffles. Martinis over whiskeys. Typescript over anything.",
      avatar: "/Session5/Avataars/sofiasul.svg"
    }
  ];
  
  //Modify Code below this line
  
  //Content Selected using ID.
  const content = document.getElementById("content");
  
  /**
   * Creates and img HTML element with given src and alt
   * @param {string} src - Source for image
   * @param {string} alt - Alt text for image
   * @returns An Image HTML Element
   */
  const getImageElement = (src, alt) => {
    let val=document.createElement("img")
    val.setAttribute("src",src)
    val.setAttribute("alt",alt)
    val.setAttribute("height","100")
    val.setAttribute("width","100")
    return val;
  };
  
  /**
   * Creates a new card with passed parameters.
   * @param {string} id - Unique id from team data
   * @param {string} fullName - Name of the team member
   * @param {string} jobTitle - Job title of the team memeber
   * @param {string} bio - Description Bio
   * @param {string} avatar - Source of the avatar image.
   * @returns section HTML element with Image and Text
   */
  function generateCard(id, fullName, jobTitle, bio, avatar) {
    //1. Create a new "section" element and set the className and id
    let sec=document.createElement("section")
    sec.setAttribute("id",`${id}`)
    sec.setAttribute("class","team-member")
    //2. Generate the image using getImageElement() function
    //Hint - Use fullname as alt for the image.
    let image=getImageElement(avatar,fullName)
    

  
    //3. Create a div for text content
    let textcontent=document.createElement("div")  
    //4. Create an h2 for fullName
    let heading=document.createElement("h2")
    heading.innerText=fullName
    let smallHeading=document.createElement("h3")
    smallHeading.innerText=jobTitle
    let para=document.createElement("p")
    para.innerText=bio
    textcontent.append(heading)
    textcontent.append(smallHeading)
    textcontent.append(para)
    sec.append(image)
    sec.append(textcontent) 



  
    //5. Create an h3 for jobTitle
  
    //6. Create a p for bio
  
    //7. Append the fullName, jobTitle, and bio element
    //   to the div created for text.
  
    //8. Append the Image and the Text div
    //   to the new section you created in step 1
  
    //Return the new section element created.
    return sec;
  }
  
  /**
   * Generates and returns an array of HTML elements
   * @param {Array} data Team data array
   */
  function generateCardArray(data) {
    const cards = [];
    //Add logic to populate `cards` array below
    for(let i=0;i<data.length;i++){
        let value=generateCard(data[i]["id"],data[i]["fullName"],data[i]["jobTitle"],data[i]["bio"],data[i]["avatar"])
        cards.unshift(value)
    }
    cards.reverse()

  
    //Return cards array
    return cards;
  }
  
  const cardsArray = generateCardArray(team);
  
  //Run a loop for the cardsArray and append its elements to content.
  for (let card of cardsArray) {
    content.append(card);
  }
  //Modify Code above this line