import Head from "next/head";
import Navbar from "@/shared/navbar";
import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Lock } from "lucide-react";

function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | GolBot</title>
        <meta
          name="description"
          content="Learn about GolBot&apos;s privacy policy and how we protect your data"
        />
      </Head>

      <Navbar />

      <Container className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="flex items-start gap-4 mb-12">
            <div className="flex-shrink-0">
              <Shield className="w-12 h-12 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl text-muted-foreground">
                Your privacy and data security are our top priorities
              </p>
            </div>
          </div>

          {/* Introduction Section */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-base leading-relaxed text-justify mb-4">
                At GolBot, we are deeply committed to protecting your privacy
                and ensuring the highest standards of security for your personal
                information. We recognize that privacy is a fundamental right and
                a cornerstone of building meaningful trust with our users and
                customers. This comprehensive Privacy Policy has been carefully
                crafted to provide you with complete transparency regarding how
                we collect, process, use, store, and safeguard your data
                throughout all of your interactions with our platform and
                services.
              </p>
              <p className="text-base leading-relaxed text-justify mb-4">
                Our approach to privacy is grounded in several core principles.
                We believe that you should have full visibility and control over
                your personal information at all times. We are committed to
                collecting only the information that is necessary to provide you
                with exceptional service and enhanced user experience. We
                implement robust security measures and industry best practices to
                protect your data from unauthorized access, misuse, or
                disclosure. We respect your rights as an individual and ensure
                that your information is handled in accordance with applicable
                data protection regulations and privacy laws in your
                jurisdiction.
              </p>
              <p className="text-base leading-relaxed text-justify mb-4">
                This Privacy Policy explains in detail the types of personal and
                non-personal information we collect from you, the purposes for
                which we use this information, and how we protect it. It also
                outlines your rights regarding your personal data, including the
                right to access, modify, or request deletion of your
                information. We maintain transparent communication about our data
                practices and encourage you to familiarize yourself thoroughly
                with this policy to understand our commitment to safeguarding
                your privacy.
              </p>
              <p className="text-base leading-relaxed text-justify">
                We understand that privacy concerns are important to you, and we
                want to assure you that your information is treated with the
                utmost care and respect. Should you have any questions, concerns,
                or require clarification about any aspect of our privacy
                practices, data handling procedures, or this Privacy Policy in
                general, we encourage you to contact us directly. Our dedicated
                team is available to address your inquiries and ensure that all
                your privacy concerns are resolved to your satisfaction.
              </p>
            </CardContent>
          </Card>

          {/* Main Content with Accordion */}
          <div className="space-y-6">
            {/* Section 1 */}
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-0">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      1. Information We Collect
                    </AccordionTrigger>
                    <AccordionContent className="space-y-6 pt-4">
                      {/* 1.1 */}
                      <div>
                        <h3 className="font-semibold text-base mb-3">
                          1.1. Personal Information
                        </h3>
                        <p className="text-sm leading-relaxed text-justify">
                          We collect personal information that you voluntarily
                          provide when interacting with our website and
                          services. This includes, but is not limited to, your
                          full name, email address, phone number, billing
                          address, and payment information when you place an
                          order through our vending machine platform. We also
                          collect information you provide when filling out forms,
                          contacting our customer support team, subscribing to
                          newsletters, or participating in surveys and feedback
                          programs. Additionally, we may collect information from
                          your profile preferences and account settings that you
                          choose to create and maintain on our platform. This
                          personal information is collected only when you
                          explicitly provide it, and it is essential for
                          processing your orders, communicating with you about
                          your transactions, and improving our services based on
                          your preferences and feedback.
                        </p>
                      </div>

                      {/* 1.2 */}
                      <div className="border-t pt-6">
                        <h3 className="font-semibold text-base mb-3">
                          1.2. Usage Information
                        </h3>
                        <p className="text-sm leading-relaxed text-justify">
                          We automatically collect certain information about your
                          interactions with our website and services to
                          understand how our platform is being used and to
                          optimize user experience. This usage information
                          includes your Internet Protocol (IP) address, which
                          helps us identify your geographic location and prevent
                          fraudulent activities; your browser type and version,
                          which allows us to ensure our website functions
                          correctly across different browsers; your device
                          information such as operating system, device model, and
                          screen resolution; your browsing patterns including
                          the pages you visit, the duration you spend on each
                          page, the links you click, and the search queries you
                          enter; your referral source showing how you accessed
                          our website; and timestamps of your activities. We
                          also collect information about your interaction with
                          features, products, and services offered on our
                          platform, including items viewed, filters applied, and
                          actions taken. This information is collected
                          automatically through server logs and analytical tools
                          and helps us identify trends, diagnose technical
                          issues, enhance website performance, personalize
                          content, and ensure the security of our platform.
                        </p>
                      </div>

                      {/* 1.3 */}
                      <div className="border-t pt-6">
                        <h3 className="font-semibold text-base mb-3">
                          1.3. Cookies
                        </h3>
                        <p className="text-sm leading-relaxed text-justify">
                          We use cookies and similar tracking technologies to
                          improve and personalize your browsing experience on
                          our website. Cookies are small text files that are
                          stored locally on your device and contain information
                          about your preferences, login status, and activities
                          on our site. We utilize several types of cookies for
                          different purposes: essential cookies that are
                          necessary for the website to function properly and
                          secure your transactions; performance cookies that
                          help us understand how visitors use our website,
                          allowing us to improve functionality and load times;
                          functional cookies that remember your preferences and
                          settings so you don&apos;t have to re-enter them on
                          subsequent visits; and marketing cookies that track
                          your interests and browsing behavior to show you
                          relevant advertisements and content. Additionally, we
                          may use similar tracking technologies such as web
                          beacons, pixels, and local storage mechanisms to
                          achieve similar objectives. These technologies help us
                          remember your login information, understand your
                          preferences, track your shopping behavior, prevent
                          fraud, and measure the effectiveness of our marketing
                          campaigns. You have the right to control cookie
                          preferences through your browser settings, where you
                          can choose to accept, reject, or delete cookies at any
                          time. Please note that disabling certain cookies may
                          affect the functionality of our website and limit your
                          ability to use some features. For more detailed
                          information about the specific cookies we use and
                          their purposes, please refer to our Cookie Policy or
                          contact our support team.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-2" className="border-0">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      <div className="flex items-center gap-2">
                        <Lock className="w-5 h-5" />
                        2. Information Sharing
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-sm leading-relaxed text-justify">
                        We are committed to protecting your privacy and
                        maintaining the confidentiality of your personal
                        information. We do not sell, trade, license, or rent
                        your personal information to third parties for their
                        marketing purposes or any other commercial use. Your
                        trust is fundamental to our business, and we treat your
                        data as a valuable asset that requires careful
                        protection. However, in certain circumstances, we may
                        share your information with trusted partners and service
                        providers who assist us in operating our website,
                        processing payments, fulfilling orders, providing
                        customer support, conducting data analysis, sending
                        marketing communications, and delivering other services
                        on our behalf. These service providers are contractually
                        obligated to maintain the confidentiality of your
                        information and use it solely for the purposes we
                        specify.
                      </p>
                      <p className="text-sm leading-relaxed text-justify mt-4">
                        We may also share your information when we believe in
                        good faith that disclosure is necessary to comply with
                        applicable laws, regulations, legal processes, or
                        governmental requests; to enforce our Terms of Service
                        and other agreements; to protect the security, privacy,
                        and safety of our platform, our users, and the general
                        public; to prevent fraudulent activities and detect or
                        address technical issues; or to respond to claims of
                        illegal activity. In the event that GolBot is involved
                        in a merger, acquisition, bankruptcy, dissolution,
                        reorganization, or similar transaction or proceeding,
                        your personal information may be transferred as part of
                        that transaction. We will notify you of any such change
                        in ownership or control of your personal information.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-3" className="border-0">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      3. Your Rights
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <p className="text-sm leading-relaxed text-justify">
                        We recognize and respect your fundamental rights
                        regarding your personal information and data privacy.
                        You have the absolute right to access your personal
                        information by requesting a copy of the data we hold
                        about you at any time. You also have the right to
                        update, correct, or modify any inaccurate or incomplete
                        information in your account, and we will make these
                        changes promptly. Additionally, you have the right to
                        request the deletion of your personal information from
                        our systems, subject to certain legal and contractual
                        obligations.
                      </p>
                      <p className="text-sm leading-relaxed text-justify mt-4">
                        You can exercise these rights by logging into your
                        account and managing your profile settings, or by
                        submitting a formal request to our privacy team. We are
                        committed to responding to all data access and deletion
                        requests within thirty (30) days of receipt, or as
                        required by applicable law. You also have the right to
                        data portability, allowing you to receive your
                        information in a structured, commonly used, and
                        machine-readable format for transfer to another service
                        provider.
                      </p>
                      <p className="text-sm leading-relaxed text-justify mt-4">
                        If you believe your rights have been violated or have
                        concerns about how we handle your personal information,
                        you may lodge a complaint with us or with the relevant
                        data protection authority in your jurisdiction. For any
                        questions, concerns, clarifications, or requests
                        regarding our privacy practices, data handling
                        procedures, or to exercise any of your rights, please
                        contact us at{" "}
                        <a
                          href="mailto:mail@aibotink.com"
                          className="text-primary font-semibold hover:underline"
                        >
                          mail@aibotink.com
                        </a>
                        . We are committed to addressing your concerns promptly
                        and transparently, typically within 48 business hours.
                        You may also reach out if you would like more information
                        about our data security measures, retention policies, or
                        any other aspect of this Privacy Policy.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              Last updated: December 2025. GolBot reserves the right to update
              this Privacy Policy at any time. We will notify you of any
              significant changes by posting the new Privacy Policy on our
              website.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Privacy;
