import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="my-12 container mx-auto">
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
        {/* //First blog    */}

        <div className="card card-side bg-pic shadow-xl">
          <div className="card-body bg-base ">
            <h2 className="card-title text-base-100 font-semibold">
              Access token and Refresh token
            </h2>
            <p className="text-base-100">
              <span className="text-yellow-100 font-semibold">
                Access Token:
              </span>{" "}
              It contains a user's information that is needed by the server to
              check if he user can access the requested resources.
            </p>
            <p className="text-base-100">
              <span className="text-yellow-100 font-semibold">
                Refresh Token:
              </span>{" "}
              Refresh token is needed to regenerate a new access token after it
              expires.
            </p>
            <div className="card-actions justify-start">
              <h2 className="card-title text-base-100">How do they work?</h2>
            </div>
            <p className="text-base-100">
              A refresh token helps a client for an API to retrieve new access
              tokens without performing a complete login process.
            </p>
            <p className="text-base-100">
              We can store these tokens in the browser's local storage/ in the
              HTTP only cookies. Or even in the session storage.. Though these
              are vulnerable not secured enough.
            </p>
          </div>
        </div>

        {/* second blog card */}

        <div className="card card-side bg-pic shadow-xl">
          <div className="card-body bg-base">
            <h2 className="card-title text-base-100">
              Difference between SQL and NoSQL
            </h2>
            <p className="text-base-100">
              <span className="text-yellow-100 font-semibold">SQL</span>{" "}
              <ul>
                <li>Relational</li>
                <li>Predefined schemas and structured query language</li>
                <li>Vertically scalable</li>
                <li>Tabular</li>
              </ul>
            </p>
            <p className="text-base-100">
              <span className="text-yellow-100 font-semibold">NoSQL</span>{" "}
              <ul>
                <li>Non-Relational</li>
                <li>Dynamic schemas for unstructured data</li>
                <li>Horizontally scalable</li>
                <li>Documented</li>
              </ul>
            </p>
          </div>
        </div>

        {/* third blog card */}

        <div className="card card-side bg-pic shadow-xl">
          <div className="card-body bg-base">
            <h2 className="card-title text-base-100">Express js vs Nest js</h2>
            <p className="text-base-100">
              <span className="text-yellow-100 font-semibold">Express js</span>{" "}
              Express js is a Node.js framework designed to build web
              applications, cross-platform mobile apps quickly and efficiently.
              It makes node js easier to use.
            </p>
            <p className="text-base-100">
              <span className="text-yellow-100 font-semibold">Nest Js</span>{" "}
              Nest.js is one of the Node.js frameworks to build higly efficient,
              scalable, and enterprise-grade backend applications using Node.
              js. It can produce highly testable, maintainable, and scalable
              applications
            </p>
          </div>
        </div>

        {/* fourth blog card */}

        <div className="card card-side bg-pic  shadow-xl">
          <div className="card-body bg-base">
            <h2 className="card-title text-base-100">
              MongoDB aggregate and How does it work?
            </h2>
            <p className="text-base-100">
              <span className="text-yellow-100 font-semibold">
              MongoDB aggregate
              </span>{" "}
              MongoDB's aggregate is a useful method used in MongoDB. It allows complex data
              manipulations, transformations, and computations on collections of
              documents.
            </p>
            <p className="text-base-100">
              <span className="text-yellow-100 font-semibold">
              How does it work?
              </span>{" "}
              Aggregation means processing a large number of documents in a collection by passing the via different stages. The stages are known as pipelines. They can filter, sort, modify documents that pass through the pipelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
