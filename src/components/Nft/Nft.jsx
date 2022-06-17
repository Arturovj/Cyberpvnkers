import React from "react";
import data from "./data.json";
import "./Nft.css";

export default function Nft() {
  console.log(data);

  return (
    <>
      <div className="nft-container">Nfts
      <div className="nft-display">
        {data.map((nft, index) => (
          <div className="nft" key={index}>
            <div>{nft.name}</div>
            
            <img className="nft-img" src={nft.img}></img>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
