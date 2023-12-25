import React from "react";
import "./Contact.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";

const Contact = () => {
  return (
    <div className="contact">
      <div className="text">
        <h6>კონტაქტი</h6>
        <p>
          ჩვენი მისამართია მთა და ველი, სადაც ყველაზე მარტივად გვიპოვით, თუმცა
          თუ მაინც გაგიჭირდათ ჩვენი პოვნა, მოგვწერეთ ელფოსტის მისამართზე
          hgaajara@gmail.com
        </p>
        <p>გაიგე მეტი აჭარის მოლაშქრეთა კლუბის შესახებ</p>
        <div className="pages">
          <a href="https://www.facebook.com/ajarahikingclub" target="_blank">
            <FaFacebookF size="54px" color="#1877f2" />
          </a>
          <a
            href="https://www.instagram.com/ajarahikingclub/?hl=en&fbclid=IwAR14krxeU96kgHv1C6bpYx8_pXw6Vua5NFmZQ-oF4S98OW2-jWdwBCsFfiY"
            target="_blank"
          >
            <FaInstagram size="54px" color="#bc2a8d" />
          </a>
        </div>
        <p>შემოგვიერთდი ჯგუფში და გახდი კლუბელი</p>

        <a
          href="https://www.facebook.com/groups/3033077966994017"
          target="_blank"
        >
          <GrGroup size="54px" color="#1877f2" />
        </a>
      </div>
      <img
        src="https://res.cloudinary.com/dgcq1oqfg/image/upload/v1703520567/gundi_q2tsex.jpg"
        alt="Ajara Hiking Club"
      />
    </div>
  );
};

export default Contact;
