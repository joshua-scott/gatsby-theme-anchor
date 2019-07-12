import React from "react"
import { Styled } from "theme-ui"

// type Props = {
//   title: String;
//   description: String;
//   image: {
//     url: String;
//     title: String;
//   }
// }

const Banner = ({ title, description, image }) => (
  <div>
    <Styled.h1>{title}</Styled.h1>
    <Styled.h2>{description}</Styled.h2>
    <img alt={image.title} src={image.url} style={{ width: "10em" }} />
  </div>
)

export default Banner
