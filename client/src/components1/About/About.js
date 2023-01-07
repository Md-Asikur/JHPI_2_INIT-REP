import React from 'react'
import Top from '../OtherpageTop/Top'
import "./about.css"
import p3 from "../img/1.jpg";

export default function About() {
  return (
    <>
      <Top title="About Our Institute" />

      <div class="about">
        <div class="title">
          <h1>About Our College</h1>
        </div>
        <div class="content">
          <h3>
            About Jhenaidah Polytechnic Institute (30023)Jhenaidah Polytechnic Institute
          </h3>
          <p>
            About Jhenaidah Polytechnic Institute (30023)Jhenaidah Polytechnic Institute
            <div class="image-section">
              <img src={p3} />
            </div>{" "}
            is situated on the eastern outskirts of the district town of Jhenaidah
            District. The institute is near the Jhenaidah Bus Terminal and on the north
            side on the way to Jhenaidah-Dhaka Highway. This is one of the 49 government
            polytechnic institutes in Bangladesh. The institute is on 2 acres of land
            opposite to the BSCIC, Jhenaidah. This institute has a five-storied Academic
            Building, a five-storied Administrative Building, two-storied Workshop
            Buildings. There are also two residential buildings in the campus; one is for
            Principal and the other two-storied building is for the staffs. The large
            buildings, clean campus and scenic beauty of this institute grab the attention
            of the visitors and passersby. The institute is providing 4 years
            Diploma-in-Engineering under the regulation of Bangladesh Technical Education
            Board (BTEB) in 5 technologies. The technologies are Civil, Computer,
            Electronics, Environmental and Electrical. This institute started its journey
            in 2004 with only Computer Technology. The other 4 technologies have been
            added to the institute latter. At present the institute has nearly 2000
            students and more than 70 teachers and staffs. The institute is relentlessly
            working to implement government’s vision-2030 to keep pace with the
            Sustainable Development Goals (SDGs) set by United Nations (UN). As a
            technical institute, the institute mainly focuses on the practical learning.
            The institute carefully and sincerely nurtures the young talents giving them
            opportunities to acquire practical skills. Many of the youths of this
            institute have shown and constantly showing their great skills by taking part
            in regional and national innovation competitions and science fairs. Some
            innovations like Smart Agro Robot, Automatic House-cleaning Robot and Life
            Saver Robot have got special local and national recognition and hailed by many
            scholars and experts. A number of TV channels have broadcast news on these
            issues. Many local and national dailies publish news about the innovative
            works of the students of this institute at regular intervals. Apart from
            technical work, the students of this institute often participate in various
            extra-curricular activities. They enjoy great facilities to show their
            creative abilities in arts, culture and sports. The institute arranges Annual
            Sports Week in February every year and publish Annual Magazine (Naboganga) in
            January every year. Students of this institute are highly encouraged to take
            part in the cultural programs and other extra-curricular activities. A team of
            self-driven teachers help and guide the students to perform best in the events
            and programs.
          </p>
        </div>
      </div>
    </>
  );
}
