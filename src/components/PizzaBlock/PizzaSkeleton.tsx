import React from "react";
import ContentLoader from "react-content-loader";

export const PizzaSkeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={524}
    viewBox="0 0 280 524"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="138" cy="125" r="125" />
    <rect x="0" y="280" rx="0" ry="0" width="280" height="24" />
    <rect x="0" y="320" rx="0" ry="0" width="280" height="45" />
    <rect x="0" y="385" rx="20" ry="20" width="280" height="35" />
    <rect x="0" y="430" rx="20" ry="20" width="280" height="35" />
    <rect x="0" y="490" rx="0" ry="0" width="105" height="27" />
    <rect x="160" y="480" rx="25" ry="25" width="120" height="40" />
  </ContentLoader>
);
