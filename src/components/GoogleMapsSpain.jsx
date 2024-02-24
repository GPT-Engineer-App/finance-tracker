import React from "react";
import { Box } from "@chakra-ui/react";

const GoogleMapsSpain = ({ address }) => {
  let src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d193571.43882528757!2d-3.7492200449772556!3d40.46366707935911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ses!4v1645720990746!5m2!1sen!2ses";
  if (address) {
    src += `&q=${encodeURIComponent(address)}`;
  }
  return <Box as="iframe" src={src} width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" />;
};

export default GoogleMapsSpain;
