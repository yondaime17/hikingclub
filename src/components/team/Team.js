import React, { useState, useEffect } from "react";
import shuffle from "lodash/shuffle";

import "./Team.css";

const Team = () => {
  // Define the initial members array
  const initialMembers = [
    {
      name: "თამუნა ორაგველიძე",
      imgSrc:
        "https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703442545/hiking%20club/DSCF2689-_1_x_okifcf.jpg?fbclid=IwAR23tDFd7_LnMUVmbwIk8axTzs14TFgD3X51hzdK_mCFqn4CU7_eHBTUA-k",
      alt: "თამუნა ორაგველიძე - აჭარის მოლაშქრე გიდების ასოციაცია",
    },
    {
      name: "გიორგი მეგრელიძე",
      imgSrc:
        "https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703442545/hiking%20club/DSCF12410x_ijpyrp.jpg?fbclid=IwAR0ms-EesFqOKyZzAq20WsbrG7BLN8_M_uWYNF6SRFUgSC3YyO-WSFw7s9Y",
      alt: "გიორგი - მეგრელიძე - აჭარის მოლაშქრე გიდების ასოციაცია",
    },
    {
      name: "მინდია ბაჟუნაიშვილი",
      imgSrc:
        "https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703442545/hiking%20club/DSCF6551x_d8yedi.jpg?fbclid=IwAR2D4ev2tIWC42Du8OSDwiizdsStar7MaDMmM73K4EQjEufDh6BeCCUBqDg",
      alt: "მინდია ბაჭუნაიშვილი - აჭარის მოლაშქრე გიდების ასოციაცია",
    },
    {
      name: "ვახტანგ მიქელაძე",
      imgSrc:
        "https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703442545/hiking%20club/411933081_1513806912805447_x_f6h4v4.jpg?fbclid=IwAR2iqCUsiMRJOCnDNflBBqFUilFvG8Lc8cPqmoQU9v3UVpwqlvTOBQJgMP4",
      alt: "ვახტან მიქელაძე - აჭარის მოლაშქრე გიდების ასოციაცია",
    },
    {
      name: "რომან ხალვაში",
      imgSrc:
        "https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703442545/hiking%20club/DSCF0474x_rpfqyc.jpg?fbclid=IwAR2M32TqcVk8ABHOB8jaCIvN3W5Jyrjf8tUV0_TGz3MMB7DfZrnUxiJ99j0",
      alt: "რომალ ხალვაში - აჭარის მოლაშქრე გიდების ასოციაცია",
    },
    {
      name: "ბექა ბოლქვაძე",
      imgSrc:
        "https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703442545/hiking%20club/DSCF2983x_jhkifo.jpg?fbclid=IwAR26tmkQLLp2bzF7n-01hLorG2MRYlmN1KIr1gKDmDPvNRvAhGMwmuuonN8",
      alt: "ბექა ბოლქვაძე - აჭარის მოლაშქრე გიდების ასოციაცია",
    },
  ];

  // State to store the shuffled members array
  const [shuffledMembers, setShuffledMembers] = useState([]);

  // Effect to shuffle the array on mount
  useEffect(() => {
    setShuffledMembers(shuffle(initialMembers));
  }, []);

  return (
    <div className="team">
      <p>
        აჭარის მოლაშქრეთა კლუბი დაფუძნდა 2022 წელს აჭარის მოლაშქრე გიდების
        ასოციაციის მიერ, მოლაშქრეების საერთო იდეის გარშემო, რომლის მიზანია
        აჭარის რეგიონში სათავგადასავლო ტურიზმის განვითარება და ცნობადობის
        ამაღლება. დამფუძნებლებს გააჩნიათ მრავალწლიანი გამოცდილება ტურიზმისა და
        მოლაშქრეობის სფეროში ისევე, როგორც საველე უსაფრთხოებაში და პირველად
        სამედიცინო დახმარებაში.
      </p>
      <div className="members">
        {shuffledMembers.map((member, index) => (
          <div className="member" key={index}>
            <img src={member.imgSrc} alt={member.alt} />
            <h5>{member.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
