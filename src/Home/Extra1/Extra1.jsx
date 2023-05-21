import React from "react";
import carcassone from "../../assets/game url/CARCASSONE.png";
import canvas from "../../assets/game url/canvas2.png";
import scrabble from "../../assets/game url/scrabble.png";
const Extra1 = () => {
  return (
    <div className="my-64 container mx-auto">
      <div>
        <h2
          className="text-center text-5xl my-8 font-bold text-yellow-950"
          data-aos="flip-down"
        >
          Our Best Seller
        </h2>
      </div>
      <div className="">
        <div className="bg-yellow-900/10 p-8 mb-6 rounded-md flex flex-col md:flex-row justify-center align-middle items-center">
          <div data-aos="fade-left">
            <img src={canvas} alt="" />
          </div>
          <div data-aos="fade-right">
            <h2 className="text-center text-3xl my-6 font-bold text-yellow-950">
              Canvas
            </h2>

            <p className="text-xl text-yellow-950/75">
            In Canvas, you play as a painter competing in an art competition.Players will collect art cards,  <br /> layering 3 of them together to create their own unique Painting. Each card contains a piece <br /> of artwork as well as a set of icons used during scoring. Icons will be revealed or hidden  <br /> based on the way players choose to layer the cards making for an exciting puzzle.Paintings <br /> are scored based on a set of Scoring cards which will change each game. Once players  <br />  have created and scored 3 paintings the game ends.
            </p>
            <p className="text-yellow-950 font-semibold">
              <small>Category: Puzzles</small>
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-yellow-900/10 mb-6 p-8 rounded-md">
        <div className="flex flex-col md:flex-row justify-center align-middle items-center">
          <div data-aos="fade-right">
            <img src={carcassone} alt="" />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-center text-3xl my-6 font-bold text-yellow-950">
              Carcassone
            </h2>

            <p className="text-xl text-yellow-950/75">
              To play Carcassonne, you and your fellow players will place tiles
              to build cities, <br /> farms, roads and cloisters. As you do so,
              you will gain points. <br /> The winner of Carcassonne is the
              player who has the most points <br /> when all of the game tiles
              have been used.
            </p>
            <p className="text-yellow-950 font-semibold">
              <small>Category: Carcassone</small>
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-yellow-900/10 p-8 mb-6 rounded-md flex flex-col md:flex-row justify-center align-middle items-center">
          <div data-aos="fade-left">
            <img src={scrabble} alt="" />
          </div>
          <div data-aos="fade-right">
            <h2 className="text-center text-3xl my-6 font-bold text-yellow-950">
              Scrabble
            </h2>

            <p className="text-xl text-yellow-950/75">
              If you place the first word in Scrabble, then you receive a Double
              Word Bonus <br /> for the word you played. For example, you'll earn 20
              points for a 10-point word.  <br /> When it's your turn to make a move,
              build off of another person's word for <br /> your word to be valid. For instance, use the "n" in "friend" to spell "pension."  <br />  Make sure that when you spell out words, you place letters in a horizontal<br />row or a vertical column rather than in a diagonal line, which is not allowed. <br /> At the end of your turn,draw new tiles to replace
              any tiles you used to spell <br /> out a word. Keep 7 tiles in your rack
              for each play unless you can't draw any more.
            </p>
            <p className="text-yellow-950 font-semibold">
              <small>Category: Scrabble</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra1;
