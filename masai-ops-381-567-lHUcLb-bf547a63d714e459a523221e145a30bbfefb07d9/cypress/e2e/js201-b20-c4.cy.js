import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:8080", id: 67890 }];

describe("Test", () => {
  let acc_score = 1;


  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }

    it("Should fetch data on fetch button click ", () => {

      cy.visit(url);

      cy.wait(1000);

      cy.get("#fetch-employees").click();

      cy.wait(1000);

      cy.get("#main-section").contains('Abram Langtry')

      cy.then(() => {
        acc_score += 2;
      });
    });


    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
