import Head from "next/head"
import Navbar from "@/shared/navbar"
import { Container } from "@/components/layout/Container"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, Lock } from "lucide-react"

function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - GolBot</title>
        <meta name="description" content="Learn how GolBot protects your privacy and data" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <Navbar />

        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-20 mt-[72px]">
          <Container size="lg">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Privacy Policy
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Your privacy and data security are our top priorities
              </p>
            </div>
          </Container>
        </div>

        <Container size="lg" className="py-16">
          {/* Introduction */}
          <Card className="shadow-xl mb-8 border-none bg-gradient-to-br from-white to-orange-50/30 dark:from-gray-900 dark:to-gray-800">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At GolBot, we are deeply committed to protecting your privacy and ensuring the highest standards of security for your personal information. We recognize that privacy is a fundamental right and a cornerstone of building meaningful trust with our users and customers. This comprehensive Privacy Policy has been carefully crafted to provide you with complete transparency regarding how we collect, process, use, store, and safeguard your data throughout all of your interactions with our platform and services.
Our approach to privacy is grounded in several core principles. We believe that you should have full visibility and control over your personal information at all times. We are committed to collecting only the information that is necessary to provide you with exceptional service and enhanced user experience. We implement robust security measures and industry best practices to protect your data from unauthorized access, misuse, or disclosure. We respect your rights as an individual and ensure that your information is handled in accordance with applicable data protection regulations and privacy laws in your jurisdiction.
This Privacy Policy explains in detail the types of personal and non-personal information we collect from you, the purposes for which we use this information, and how we protect it. It also outlines your rights regarding your personal data, including the right to access, modify, or request deletion of your information. We maintain transparent communication about our data practices and encourage you to familiarize yourself thoroughly with this policy to understand our commitment to safeguarding your privacy.
We understand that privacy concerns are important to you, and we want to assure you that your information is treated with the utmost care and respect. Should you have any questions, concerns, or require clarification about any aspect of our privacy practices, data handling procedures, or this Privacy Policy in general, we encourage you to contact us directly. Our dedicated team is available to address your inquiries and ensure that all your privacy concerns are resolved to your satisfaction.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Accordion */}
          <Card className="shadow-xl">
            <CardContent className="p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold">
                    1. Information We Collect
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-2 text-muted-foreground">
                      <p>
                        <strong className="text-foreground">1.1. Personal Information:</strong> We collect personal information that you voluntarily provide when interacting with our website and services. This includes, but is not limited to, your full name, email address, phone number, billing address, and payment information when you place an order through our vending machine platform. We also collect information you provide when filling out forms, contacting our customer support team, subscribing to newsletters, or participating in surveys and feedback programs. Additionally, we may collect information from your profile preferences and account settings that you choose to create and maintain on our platform. This personal information is collected only when you explicitly provide it, and it is essential for processing your orders, communicating with you about your transactions, and improving our services based on your preferences and feedback.
                      </p>
                      <p>
                        <strong className="text-foreground">1.2. Usage Information:</strong> We automatically collect certain information about your interactions with our website and services to understand how our platform is being used and to optimize user experience. This usage information includes your Internet Protocol (IP) address, which helps us identify your geographic location and prevent fraudulent activities; your browser type and version, which allows us to ensure our website functions correctly across different browsers; your device information such as operating system, device model, and screen resolution; your browsing patterns including the pages you visit, the duration you spend on each page, the links you click, and the search queries you enter; your referral source showing how you accessed our website; and timestamps of your activities. We also collect information about your interaction with features, products, and services offered on our platform, including items viewed, filters applied, and actions taken. This information is collected automatically through server logs and analytical tools and helps us identify trends, diagnose technical issues, enhance website performance, personalize content, and ensure the security of our platform.
                      </p>
                      <p>
                        <strong className="text-foreground">1.3. Cookies:</strong> We use cookies and similar tracking technologies to improve and personalize your browsing experience on our website. Cookies are small text files that are stored locally on your device and contain information about your preferences, login status, and activities on our site. We utilize several types of cookies for different purposes: essential cookies that are necessary for the website to function properly and secure your transactions; performance cookies that help us understand how visitors use our website, allowing us to improve functionality and load times; functional cookies that remember your preferences and settings so you don't have to re-enter them on subsequent visits; and marketing cookies that track your interests and browsing behavior to show you relevant advertisements and content. Additionally, we may use similar tracking technologies such as web beacons, pixels, and local storage mechanisms to achieve similar objectives. These technologies help us remember your login information, understand your preferences, track your shopping behavior, prevent fraud, and measure the effectiveness of our marketing campaigns. You have the right to control cookie preferences through your browser settings, where you can choose to accept, reject, or delete cookies at any time. Please note that disabling certain cookies may affect the functionality of our website and limit your ability to use some features. For more detailed information about the specific cookies we use and their purposes, please refer to our Cookie Policy or contact our support team.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-semibold">
                    2. Information Sharing
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-2 text-muted-foreground">
                      <p>
                        <strong className="text-foreground">2.1.</strong> We are committed to protecting your privacy and maintaining the confidentiality of your personal information. We do not sell, trade, license, or rent your personal information to third parties for their marketing purposes or any other commercial use. Your trust is fundamental to our business, and we treat your data as a valuable asset that requires careful protection. However, in certain circumstances, we may share your information with trusted partners and service providers who assist us in operating our website, processing payments, fulfilling orders, providing customer support, conducting data analysis, sending marketing communications, and delivering other services on our behalf. These service providers are contractually obligated to maintain the confidentiality of your information and use it solely for the purposes we specify. We may also share your information when we believe in good faith that disclosure is necessary to comply with applicable laws, regulations, legal processes, or governmental requests; to enforce our Terms of Service and other agreements; to protect the security, privacy, and safety of our platform, our users, and the general public; to prevent fraudulent activities and detect or address technical issues; or to respond to claims of illegal activity. In the event that GolBot is involved in a merger, acquisition, bankruptcy, dissolution, reorganization, or similar transaction or proceeding, your personal information may be transferred as part of that transaction. We will notify you of any such change in ownership or control of your personal information.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-semibold">
                    3. Your Rights
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-2 text-muted-foreground">
                      <p>
                        We recognize and respect your fundamental rights regarding your personal information and data privacy. You have the absolute right to access your personal information by requesting a copy of the data we hold about you at any time. You also have the right to update, correct, or modify any inaccurate or incomplete information in your account, and we will make these changes promptly. Additionally, you have the right to request the deletion of your personal information from our systems, subject to certain legal and contractual obligations. You can exercise these rights by logging into your account and managing your profile settings, or by submitting a formal request to our privacy team. We are committed to responding to all data access and deletion requests within thirty (30) days of receipt, or as required by applicable law. You also have the right to data portability, allowing you to receive your information in a structured, commonly used, and machine-readable format for transfer to another service provider. If you believe your rights have been violated or have concerns about how we handle your personal information, you may lodge a complaint with us or with the relevant data protection authority in your jurisdiction.
                        For any questions, concerns, clarifications, or requests regarding our privacy practices, data handling procedures, or to exercise any of your rights, please contact us at{' '}
                        <a href="mailto:mail@aibotink.com" className="text-primary hover:underline font-medium">
                          mail@aibotink.com
                        </a>.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </Container>
      </div>
    </>
  )
}

export default Privacy
