import React from "react";
import Layout from "../layout/Layout";
import SliderPortfolio from "../components/slider-portfolio/SliderPortfolio";
import HeroSection from "../components/hero-section/HeroSection";
import TitleSection from "../components/heading/TitleSection";
import ParallaxImage from "../components/Image/ParallaxImage";
import MoveBox from "../components/move-box/MoveBox";
import Button from "../components/button/Button";
import PortfolioSwiper from "../components/portfolio/PortfolioSwiper";
import SwiperPagination from "../components/swiper-pagination/SwiperPagination";
import Testimonial from "../components/testimonial/Testimonial";
import Accordion, { AccordionItem } from "../components/accordion/Accordion";
import DsnGrid from "../layout/DsnGrid";
import TitleCover from "../components/heading/TitleCover";
import BlogSwiper from "../components/bolg/BlogSwiper";
import BrandClient from "../components/brand-client/BrandClient";
import { getSliderData } from "../data/home-slider";
import { getNewsOutlet } from "../data/news-outlet";
import { getServiceData } from "../data/service";

import NextPage from "../components/next/NextPage";
import Footer from "../components/footer/Footer";
import ModalContact from "../components/model-right/ModalContact";
import Head from "next/head";
import Image from "next/image";
import ServiceTow from "../components/services/grid/ServiceTow";
import { getHomeFooterService } from "../data/serviceHomeFooter";

function Home() {
  TitleSection.defaultProps = {
    classDesc: "line-shape line-shape-before",
    classDesInner: "line-bg-right",
  };

  return (
    <Layout
      modelRight={{
        children: <ModalContact />,
        propsModal: { textBtn: "Contact" },
      }}
    >
      <Head>
        <title>Home | Eremia Creative Portfolio Multi-Purpose</title>
      </Head>
      <SliderPortfolio
        webgel
        fullWidth
        className={"align-items-end pb-20"}
        webgelOptions={{
          displacement: "/img/displacement/8.jpg",
          speedIn: 3.5,
        }}
        data={getSliderData()}
        metaData={{ hasSeparator: true }}
      />
      <HeroSection
        className="container section-margin container fill-right-container"
        title="Digital Marketing - Trusted by Fortune 500"
        subtitle="Our enterprise team stands for quality and reliability, earning the trust of prestigious Fortune 500 companies. We pride ourselves on our extensive experience."
        data-dsn-title="How We Are" heroImage="/img/home/digital-fortune.jpg"
      />
      {/*Start Box Info Move Content*/}
      <div className="p-relative section-margin">
        <ParallaxImage src="/img/home/Best-SEO-Agency-Bali-Service.jpg" overlay={4} alt={""} />
        <MoveBox tablet={false}>
          <TitleSection
            className={`align-items-start mb-30`}
            description={
              "Accelerate SERP Listings <a href='#'>SEO Agency Bali</a>"
            }
            defaultSpace={false}
          >
            Amplify IG & FB Accounts <a href="#">Social Media Agency Bali</a>
          </TitleSection>

          <p className="mb-10">
            Looking to boost leads? We&lsquo;re not about one-size-fits-all
            strategies; we&lsquo;re about what works. We offer the tools and tactics
            to strengthen your online dominance on search engines and social
            media, all through flexible, no-lock-in SEO and SMM packages. We
            understand that every business has unique needs and goals, so our
            packages are fully customizable to meet your specific requirements.
          </p>
          <p className="mb-30">
            Looking for an SEO blueprint? We created our own, after a decade of
            algorithm exploration. Secure your industry-leading position today
            and keep your competition in the rear-view mirror. Limited spots
            available per industry (Region Specific). Act now.
          </p>

          <Button
            href={"work-classic-2-col"}
            className={"image-zoom"}
            data-dsn="parallax"
            transitionPage={{ title: "Our Portfolio" }}
          >
            Contact Us <span>⟶</span>
          </Button>
        </MoveBox>
      </div>
      {/*End Box Info Move Content*/}
      {/*<!-- ========== End box-gallery-vertical image Right ========== */}
      <section className="about-section-2 section-margin">
        <div className="container">
          <DsnGrid col={2} colTablet={1}>
            <div className="box-img p-relative">
              <div className="box-inner-img p-absolute">
                <Image
                  className={"cover-bg-img"}
                  src="/img/home/strategic-plan-of-digital.jpg"
                  alt=""
                  fill
                />
              </div>
              <div className="box-inner-img p-absolute">
                <Image
                  className={"cover-bg-img"}
                  src="/img/home/gate-to-digital.jpg"
                  alt=""
                  fill
                />
              </div>
            </div>
            <div className="box-information">
              <TitleSection
                className="align-items-start mb-50"
                description="Get Your Game-Changing "
                defaultSpace={false}
              >
                Digital Marketing Plan.
              </TitleSection>
              <p className="mb-30">
                Are you looking for a digital marketing partner that understands
                the unique needs of your business? Look no further than Algo Sea
                Biz. Our team works closely with you to develop a tailored
                strategy that aligns with your brand and objectives, whether
                you&lsquo;re looking to increase website traffic, boost sales, or
                improve your online reputation. We have the tools and knowledge
                to help you succeed, and we won&lsquo;t let a small budget hold you
                back. With Algo Sea Biz, you&lsquo;ll get exceptional service and
                support that delivers outstanding results. Don&lsquo;t wait to take
                your online presence to the next level.
              </p>
              <Button href={"/services"} className="link-custom mt-30">
                Contact Us <span className="icon">⟶</span>
              </Button>
            </div>
          </DsnGrid>
        </div>
      </section>
      {/*Start Portfolio*/}
      <div className="section-margin" data-dsn-title="Our Portfolio">
        <TitleSection
          className={`container align-items-center text-center`}
          description={"Our Works"}
        >
          Creative Portfolio <br />
          Designs
        </TitleSection>
        <PortfolioSwiper
          grabCursor
          desktop={{ spaceBetween: 50, slidesPerView: 1.5 }}
          tablet={{ spaceBetween: 0, slidesPerView: 1.3 }}
          mobile={{ slidesPerView: 1 }}
          stylePortfolio="work-section"
          className="text-left v-dark-head title-inherit h4"
          centeredSlides
          loop
          blur
          parallax
          speed={1200}
          watchSlidesProgress
          loopedSlides={2}
          parallaxImage={{ "data-swiper-parallax-scale": "0.85" }}
          parallaxContent={{ "data-swiper-parallax-opacity": "0" }}
        >
          <SwiperPagination
            className={`justify-content-between dsn-container mt-30`}
          />
        </PortfolioSwiper>
      </div>
      {/*End Portfolio*/}
      {/*<!-- ========== box-gallery-vertical image right ========== */}
      <DsnGrid
        className="p-relative mt-section over-hidden"
        col={2}
        colTablet={1}
        colGap={0}
        rowGap={0}
      >
        <div className="box-info box-padding background-section order-md-2">
          <TitleSection
            className={"mb-50"}
            defaultSpace={false}
            description="Understanding your path"
          >
            Situation & Analysis.
          </TitleSection>

          <p className="max-w570 dsn-up">
            Understanding your company&lsquo;s strengths and weaknesses is just the
            beginning. To truly connect with your target audience and develop a
            winning strategy, you need to go deeper and discover what makes your
            target buyers tick. Our team of experts will help you go beyond
            surface-level analysis and dive into your buyer&lsquo;s emotions,
            interests, and personal styles to create detailed personas that
            guide your marketing efforts. With our tailored approach, you can
            identify the areas where you excel as well as the challenges you
            need to overcome and differentiate your products or services from
            your competitors. Let&lsquo;s get started and make your mark!
          </p>

          <div className="border-bottom mt-30 mb-30" />
          <Button href={"/services"} className=" mt-30">
            View More <span className="icon">⟶</span>
          </Button>
        </div>
        <div className="box-img order-md-1">
          <ParallaxImage
            alt=""
            src={"/img/home/situation-analysis.jpg"}
            height="100%"
          />
        </div>
      </DsnGrid>
      {/*<!-- ========== End box-gallery-vertical image Right ========== */}
      {/*Start Service*/}
      <div className="container section-margin" data-dsn-title="our Services">
        <ServiceTow className={"icon-left"} col={2} />
      </div>
      {/*End Service*/}
      {/*<!-- ========== box-gallery-vertical image left ========== */}
      <DsnGrid
        className="p-relative over-hidden mb-section"
        col={2}
        colTablet={1}
        colGap={0}
        rowGap={0}
        data-dsn-title="Feature"
      >
        <div className="box-img">
          <ParallaxImage alt="" src={"/img/home/goal-settings.jpg"} height="100%" />
        </div>
        <div className="box-info box-padding background-section">
          <TitleSection
            className={"mb-50"}
            defaultSpace={false}
            description="Reach your goals"
          >
            Goal-Setting and Strategic Planning
          </TitleSection>
          <p className="max-w570 dsn-up mb-10 ">
            Our comprehensive digital marketing plan is designed to suit your
            budget and achieve sustainable growth. We believe that short-term
            and long-term digital goals should always be based on a realistic
            approach that considers your business&lsquo;s unique strengths and
            challenges. But setting goals is only half the battle. To achieve
            digital marketing success, you need to reach your audiences where
            they&lsquo;ll be most receptive to your message. When it comes to digital
            marketing, it&lsquo;s all about finding the right media portals that your
            audience uses, from social media platforms to search engines and
            beyond. A solid digital marketing plan that is consistently executed
            will help you achieve the results you&lsquo;re after, regardless of your
            budget. With so many different tactics available to reach your
            audiences, the sky is truly the limit. Let&lsquo;s make it happen.
          </p>

          <div className="border-bottom mt-30 mb-30" />

          <Button href={"/services"} className="mt-30">
            View More <span className="icon">⟶</span>
          </Button>
        </div>
      </DsnGrid>
      {/*<!-- ========== End box-gallery-vertical image left ========== */}
      {/*========== End indonesia news outlet Section ==========*/}
      <section
        className="container section-margin"
        data-dsn-title="press and media"
      >
        <TitleSection
          className={`align-items-center text-center`}
          description={"PRESS AND MEDIA"}
        >
          Indonesian News <br />
          Outlets
        </TitleSection>

        <BrandClient
        data={getNewsOutlet()}
          col={3}
          colTablet={3}
          colMobile={2}
          colGap={0}
          rowGap={0}
        />
      </section>
      {/*========== End brand-client Section ==========*/}
      {/*<!-- ========== box-gallery-vertical image right ========== */}
      <DsnGrid
        className="p-relative mt-section over-hidden"
        col={2}
        colTablet={1}
        colGap={0}
        rowGap={0}
      >
        <div className="box-info box-padding background-section order-md-2">
          <TitleSection
            className={"mb-50"}
            defaultSpace={false}
            description="Exciting Social Media Marketing."
            tag="h2"
          >
            Social Media Agency.
          </TitleSection>

          <p className="max-w570 dsn-up mb-6">
            Are you looking to average 200% more reach and impressions than your
            competitors? Social media marketing can do that - Provided its
            managed correctly. We&lsquo;ve helped grow brands from beginner stages,
            assisted corporate institutions with their social status. Doubtful?
            Our case studies of clients and partners are proof. Only the top 1%
            of our skill-evaluated applicants join the team. Our social media
            managers have dominated Instagram sales, aiding numerous clients in
            growing their revenue streams. Other agencies might get you &lsquo;likes&lsquo;
            but no real leads. With Algo, we find your missing revenue and we
            fix it; by testing and optimizing your{" "}
            <a href="/blog/brand-personality-a-special-trait-that-makes-your-brand-shines/">
              brand personality
            </a>{" "}
            and sale funnels.
          </p>
          <p className="max-w570 dsn-up">
            Here&lsquo;s the inside scoop: Properly executed{" "}
            <a href="/social-media-marketing-service-bali/">
              social media management
            </a>{" "}
            involves outreach to well-known Influencers, a powerful tool used by
            the biggest brands in Bali. Partner with Algo and gain access to a
            dedicated social media manager. We go beyond the basics of hashtags
            and post timings. Elevate your brand today. Act now.
          </p>

          <div className="border-bottom mt-30 mb-30" />
          <Button href={"/contact"} className=" mt-30">
            Contact Us <span className="icon">⟶</span>
          </Button>
        </div>
        <div className="box-img order-md-1">
          <ParallaxImage
            alt=""
            src={"/img/home/social-media-agency.jpg"}
            height="100%"
          />
        </div>
      </DsnGrid>
      {/*<!-- ========== End box-gallery-vertical image Right ========== */}

      {/*Start testimonial Section*/}
      <div className="section-margin" data-dsn-title="Testimonials">
        <Testimonial
          className="container section-margin"
          title="Feedback from our clients."
          skin={["testimonials-half"]}
          backgroundColor={"background-section"}
          desktop={{ slidesPerView: 2 }}
          mobile={{ slidesPerView: 1 }}
          speed={1000}
          grabCursor
          loop
          loopedSlides={2}
          parallax
          parallaxImage={{ "data-swiper-parallax-scale": 0.7 }}
          parallaxContent={{
            "data-swiper-parallax-opacity": 0,
            "data-swiper-parallax": "30%",
          }}
        >
          <SwiperPagination
            className={`justify-content-between dsn-container mt-30`}
          />
        </Testimonial>
      </div>

      {/*End testimonial Section*/}

      {/*Start box vertical Section*/}
      <section
        className="box-gallery-vertical container section-margin"
        data-dsn-title="Our Services"
      >
        <DsnGrid
          col={2}
          colTablet={1}
          colGap={0}
          rowGap={0}
          rowGapTablet={0}
          rowGapMobile={0}
        >
          <div className="p-relative mb-lg-section">
            <div className="box-im w-100 h-100 p-absolute">
              <ParallaxImage
                alt={""}
                src={"/img/home/marketing-global.jpg"}
                overlay={3}
                height="100%"
                heightTable={"70vh"}
                heightMobile={"70vh"}
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 70vw,33vw"
              />
            </div>
          </div>
          <div className="p-relative">
            <div className="box-info h-100 box-padding background-section ">
              <DsnGrid className="box-info-inner" col={1} colGap={0}>
                <TitleCover>Effective and reliable SEO</TitleCover>
                <TitleSection
                  className={"text-uppercase"}
                  description={"Effective, Reliable SEO"}
                  defaultSpace={false}
                >
                  Search Engine Optimization Agency
                </TitleSection>
                <p>
                  Are you looking to generate 50x more leads than the average
                  website? SEO can be used to do that - provided it's executed
                  correctly. We've helped startups outperform decade-old
                  industry titans. Don't take our word for it; our clients and
                  partners case studies speak volumes. Are you ready to power up
                  your SERPs? Our team uses the latest in SEO to increase your
                  traffic and leads, we've helped a multitude of clients
                  increase their revenue exponentially. Where others fail to
                  deliver traffic or leads despite page 1 rankings, we step in.
                  We're not just doing SEO. We're giving you our guidance in
                  growing revenue from search engines.
                </p>
                <p className="mt-2">Here's the big secret they won't tell you:</p>
                <Accordion>
                  <AccordionItem title="Properly executed SEO" active number={1}>
                    <p>
                    Properly executed SEO is the most effective digital marketing tool used by industry giants and start-ups alike.
                    </p>
                  </AccordionItem>
                  <AccordionItem title="Roadmap" number={2}>
                    <p>
                    Partner with Algo and receive a customizable roadmap. We're not throwing darts in the dark (Unlike other agencies). 
                    Increase your SERPs. Act now.
                    </p>
                  </AccordionItem>
                  <AccordionItem title="User Experience" number={3}>
                    <p>
                      Cepteur sint occaecat cupidatat proident, taken possession
                      of my entire soul, like these sweet mornings of spring
                      which I enjoy with my whole.
                    </p>
                  </AccordionItem>
                </Accordion>
              </DsnGrid>
            </div>
          </div>
        </DsnGrid>
      </section>
      {/*End box vertical Section*/}
      {/*========== End indonesia news outlet Section ==========*/}
      <section
        className="container section-margin items-center flex flex-col"
        data-dsn-title="our clients"
      >
        <TitleSection
          className={`align-items-center text-center`}
          description={"Our Clients"}
        >
          Your <span className=" gradient-text">Successful</span>, <br />
          is our <span className=" gradient-text">reputation</span>
        </TitleSection>

        <BrandClient
          col={3}
          colTablet={3}
          colMobile={2}
          colGap={0}
          rowGap={0}
        />

<Button
            href={"portfolio"}
            className={"image-zoom mt-10"}
            data-dsn="parallax"
            transitionPage={{ title: "Our Portfolio" }}
          >
            Show More <span>⟶</span>
          </Button>
      </section>
      {/*========== End brand-client Section ==========*/}

        {/*Start Service*/}
      <div className="container section-margin" data-dsn-title="our Services">
        <ServiceTow className={"icon-top"} col={4} data={getHomeFooterService()} />
      </div>
      {/*End Service*/}
         
      {/*Start Blog*/}
      <div className="section-margin" data-dsn-title="Lasts post">
        <TitleSection
          className={`container  align-items-center text-center`}
          description={"Lasts post"}
        >
          Latest And Greatest <br />
          Post
        </TitleSection>
        <BlogSwiper
          className="dsn-container"
          grabCursor
          desktop={{ spaceBetween: 50, slidesPerView: 1.5 }}
          tablet={{ spaceBetween: 30, slidesPerView: 1.3 }}
          mobile={{ spaceBetween: 0, slidesPerView: 1 }}
          centeredSlides
          loop
          blur
          parallax
          speed={1200}
          watchSlidesProgress
          loopedSlides={2}
          parallaxImage={{ "data-swiper-parallax-scale": "0.85" }}
          parallaxContent={{ "data-swiper-parallax-opacity": "0.5" }}
        >
          <SwiperPagination
            className={`justify-content-between dsn-container mt-30`}
          />
        </BlogSwiper>
      </div>
      {/*End Blog*/}
      {/*========== Next Page ==========*/}
      <NextPage className="section-padding border-top background-section" />
      {/*========== End Next Page ==========*/}

      {/*========== Footer ==========*/}
      <Footer className="background-section" />
      {/*========== End Footer ==========*/}
    </Layout>
  );
}

export default Home;
