import StatItem from "@/components/molecules/StatItem";
import Separator from "@/components/molecules/StatItem/separator";
import React from "react";

export default function Reached() {
    return (
      <>
        <section className="reached pt-50 pb-50">
          <div className="container-fluid">
            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
              <StatItem number={"290 M"} description={"Players Top Up"} />
              <Separator />
              <StatItem number={"12.500"} description={"Games Available"} />
              <Separator />
              <StatItem number={"99,9%"} description={"Happy Players"} />
              <Separator />
              <StatItem number={"4.7"} description={"Rating Worldwide"} />
            </div>
          </div>
        </section>
      </>
    );
}
