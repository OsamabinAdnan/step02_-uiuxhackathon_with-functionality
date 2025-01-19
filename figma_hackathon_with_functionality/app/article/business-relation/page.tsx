import React from "react";

export default function BusinessRelation() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto bg-secondary dark:bg-secondary py-16 sm:px-8 px-4 space-y-6">
        <h1 className="font-bold sm:text-4xl text-2xl text-center text-black dark:text-primary ">
          Business Relation
        </h1>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]">
          At Morent, we understand the importance of fostering strong and
          enduring business relationships built on trust, integrity, and mutual
          respect. Our commitment to excellence extends beyond our customer
          interactions to encompass our business relations with suppliers,
          vendors, and industry partners.
        </p>
        <div className="flex flex-col gap-6">
          {/* Our Approach */}
          <span className="space-y-3">
            <p className="sm:text-2xl text-xl font-bold">
              <span className="text-primary">1.</span> Our Approach
            </p>
            <li className="text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]">
              <strong className="text-sm text-black dark:text-primary">
                Open Communication:{" "}
              </strong>{" "}
              We believe in transparent and open communication as the
              cornerstone of successful business relations. We strive to
              maintain clear lines of communication with our partners, ensuring
              that expectations are aligned and challenges are addressed
              proactively.
            </li>
            <li className="text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]">
              <strong className="text-sm text-black dark:text-primary">
                Collaborative Partnership:
              </strong>{" "}
              We view our business relations as collaborative partnerships,
              where both parties work together towards shared goals and
              objectives. By leveraging each other&#039;s strengths and
              resources, we can achieve greater success and drive innovation in
              the automotive industry.
            </li>
            <li className="text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]">
              <strong className="text-sm text-black dark:text-primary">
                Win-Win Solutions:
              </strong>{" "}
              We are committed to creating win-win solutions that benefit all
              stakeholders involved. Whether it&#039;s negotiating fair terms,
              resolving disputes amicably, or exploring new opportunities for
              growth, we prioritize outcomes that deliver value for everyone.
            </li>
          </span>
          {/* Partnering with Morent */}
          <span className="space-y-3">
            <p className="sm:text-2xl text-xl font-bold">
              <span className="text-primary">2.</span> Partnering with Morent
            </p>
            <li className="text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]">
              <strong className="text-sm text-black dark:text-primary">
                Supplier Relations:
              </strong>{" "}
              Build a strong and mutually beneficial relationship with Morent by
              becoming one of our trusted suppliers. Join our network of
              suppliers dedicated to providing high-quality products and
              services that meet our standards of excellence.
            </li>
            <li className="text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]">
              <strong className="text-sm text-black dark:text-primary">
                Vendor Partnerships:
              </strong>{" "}
              Partner with Morent as a vendor to supply goods or services that
              support our operations and enhance our customer experience. We
              value partnerships with vendors who share our commitment to
              quality, reliability, and innovation.
            </li>
            <li className="text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]">
              <strong className="text-sm text-black dark:text-primary">
                Industry Collaboration:
              </strong>{" "}
              Collaborate with Morent on industry initiatives, research
              projects, and innovation programs to drive positive change and
              advancement in the automotive sector. Together, we can shape the
              future of mobility and transportation.
            </li>
          </span>

          {/* Let's Connect */}
          <ol className="space-y-3">
            <li className="sm:text-2xl text-xl font-bold">
              Let&#039;s Connect
            </li>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]">
              Interested in exploring business relations with Morent? We welcome
              the opportunity to establish meaningful partnerships that
              contribute to our mutual success and growth. Contact our business
              relations team today to start the conversation and discover how we
              can work together to achieve our business objectives.
            </p>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 text-[20px]">
              Let&#039;s build lasting and fruitful business relations that
              propel us towards a brighter future. Get in touch with us today to
              begin our journey of collaboration and innovation!{" "}
            </p>
          </ol>
        </div>
      </div>
    </>
  );
}
