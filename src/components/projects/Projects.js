import React, { useState } from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { IoTrailSignOutline } from "react-icons/io5";
import { LiaHikingSolid } from "react-icons/lia";
import { MdOutlineSchool } from "react-icons/md";

import "./Projects.css";

const Projects = () => {
  const [project, setProject] = useState("");
  return (
    <div className="projects">
      {project === "education" ? (
        <div className="education project">
          <button className="go_back" onClick={() => setProject("")}>
            <RiArrowGoBackLine color="#9246b0" size="24px" />
          </button>

          <h5>არაფორმალური განათლება</h5>
          <p>
            ჩვენი ყველაზე მნიშვნელოვანი მისია გახლავთ მომავალ თაობაში ლაშქრობის
            და მოგზაურობის ინტერესის გაღვივება, მათთვის ჩვენი ცოდნის და
            გამოცდილების გაზიარება. 2022 წელს დავიწყეთ პროექტი "სკოლა,
            მოგზაურობა და არაფორმალური განათლება", რომლის ფარგლებშიც, მოწვევის
            საფუძველზე, სკოლებში მოსწავლეებთან ვატარებთ შეხვედრებს, ვაცნობთ
            სალაშქრო აღჭურვილობას, ვასწავლით თუ როგორ დაგეგმონ მოგზაურობა. ჩვენ
            ვთანამშრომლობთ ბათუმის რამდენიმე სკოლასთან. უახლოეს მომავალშ
            ვგეგმავთ პროექტის გაფართოვებას, რათა სულ უფრო მეტი სკოლა მოვიცვათ და
            მეტ მოსწავლეს მივაწოდოთ საინტერესო და საჭირო ინფორმაცია. ამ
            საქმიანობას ჩვენ ყოველგარი შემოსავლის გარეშე ვაკეთებთ, თქვენ
            შეგიძლიათ მიიღოთ მონაწილეობა ამ პროექტში, გახდეთ პროექტის დონორი და
            დაგვეხმაროთ მომავალი თაობის სწორ და ჯანსაღ აღზრდაში, ამისათვის
            შეგიძლიათ მოგვწეროთ ან დაგვირეკოთ.
          </p>
          <div className="images">
            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703520281/skola_6_dyobqg.jpg"
              alt="Ajara Hiking Club"
            />
            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703520284/school_3_jbbbvg.jpg"
              alt="Ajara Hiking Club"
            />
            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703520284/school_2_fzyhhx.jpg"
              alt="Ajara Hiking Club"
            />
            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703520283/school_1_b85py4.jpg"
              alt="Ajara Hiking Club"
            />

            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703520147/skola_4_omafwl.jpg"
              alt="Ajara Hiking Club"
            />
            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703520111/skola_3_ploij1.jpg"
              alt="Ajara Hiking Club"
            />
            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703520096/skola_2_ids9dk.jpg"
              alt="Ajara Hiking Club"
            />
            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703520095/skola_1_hjlur2.jpg"
              alt="Ajara Hiking Club"
            />
            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703520280/skola_5_i747xy.jpg"
              alt="Ajara Hiking Club"
            />
          </div>
        </div>
      ) : project === "discover" ? (
        <div className="discover project">
          <button className="go_back" onClick={() => setProject("")}>
            <RiArrowGoBackLine color="#9246b0" size="24px" />
          </button>
          <h5>ახალი ბილიკების აღმოჩენა</h5>
          <p>
            ჩვენ ყოველდღიურ რეჟიმში ვმუშაობთ რათა აღმოვაჩინოთ ახალი ტურისტული
            მარშრუტები, ჩანჩქერები და საინტერესო ადგილები. დაკავებული ვართ
            როგორც ლაშქრობით ისე კანიონინგით, კემპინგით და სხვა. აჭარის
            ტურიზმისა და კურორტების დეპარტამენტთან და ტურისტული პროდუქტების
            განვითარების სააგენტსთან ერთად თანამშრომლობით უკვე განხორციელდა
            არაერთი საინტერესო პროექტი, დაიგეგმა სალაშქრო მარშრუტები და მოინიშნა
            ახალი ტურისტული ატრაქციები.
          </p>
          <div className="images">
            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703523670/eqspedicia_fhptd0.jpg"
              alt="Ajara Hiking Club"
            />
            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703523675/eqspedicia_5_gtjvqe.jpg"
              alt="Ajara Hiking Club"
            />
            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703523662/eqspedicia_2_ldnnkn.jpg"
              alt="Ajara Hiking Club"
            />
            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703523668/eqspedicia_9_o4ocme.jpg"
              alt="Ajara Hiking Club"
            />

            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703523659/eqspedicia-_11_p4wnng.jpg"
              alt="Ajara Hiking Club"
            />
            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703523658/eqspedicia_10_uxvpy3.jpg"
              alt="Ajara Hiking Club"
            />
            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703523665/eqspedicia_7_euq0dd.jpg"
              alt="Ajara Hiking Club"
            />
            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703523661/eqspedicia_1_bewtdf.jpg"
              alt="Ajara Hiking Club"
            />
            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703523659/eqspedicia_1_kaqi6o.jpg"
              alt="Ajara Hiking Club"
            />

            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703523666/eqspedicia_8_i0mclr.jpg"
              alt="Ajara Hiking Club"
            />

            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703523664/eqspedicia_3_hcdmqh.jpg"
              alt="Ajara Hiking Club"
            />
            <img
              src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703523683/eqspedicia_4_pwbrad.jpg?fbclid=IwAR30-rNJ6cKSYU3NH8xNg38sCBZ8AUCnJ-1TjTacEU1gT7liR5r7MKQhjf4"
              alt="Ajara Hiking Club"
            />
          </div>
        </div>
      ) : project === "train" ? (
        <div className="train project">
          <button className="go_back" onClick={() => setProject("")}>
            <RiArrowGoBackLine color="#9246b0" size="24px" />
          </button>
          <div className="train_text">
            <h5>მოლაშქრეების გადამზადება</h5>
            <p>
              2024 წლიდან ვიწყებთ პროექტს: გახდი მოლაშქრე, სადაც მონაწილეობის
              მიღება შეეძლება ნებისმიერ მსურველს. გადამზადება შედგება თეორიული
              და პრაქტიკული ტრეინინგებისგან. პროექტი ძრითადად განკუთვნილია
              მათთვის ვისაც არ აქვს ლაშქრობის გამოცდილება თუმცა გააჩნია დიდი
              სურვილი და ენთუზიაზმი.
            </p>
          </div>

          <img
            src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703526275/gadamzadeba-1_ziu5dl.jpg"
            alt="Ajara Hiking Club"
          />
        </div>
      ) : (
        <>
          <h6>პროექტები</h6>

          <div className="text">
            <button
              className="open_project"
              onClick={() => setProject("education")}
            >
              <MdOutlineSchool color="#9246b0" size="52px" />
              <h5>არაფორმალური განათლება</h5>
            </button>
            <button
              className="open_project"
              onClick={() => setProject("discover")}
            >
              <IoTrailSignOutline color="#9246b0" size="52px" />

              <h5>ახალი ბილიკების აღმოჩენა</h5>
            </button>
            <button
              className="open_project"
              onClick={() => setProject("train")}
            >
              <LiaHikingSolid color="#9246b0" size="52px" />

              <h5>მოლაშქრეების გადამზადება</h5>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
