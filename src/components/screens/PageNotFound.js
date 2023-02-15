import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../page.css";
import { Helmet } from "react-helmet";
function PageNotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="contant_box_404">
                  <h3 class="h2">Look like you're lost</h3>

                  <p>the page you are looking for not avaible!</p>

                  <Rout to="/efood"> Go to Home</Rout>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageNotFound;
const Rout = styled(Link)`
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
  border-radius: 8px;
  font-family: "Inter Bold";
  font-size: 12px;
`;
