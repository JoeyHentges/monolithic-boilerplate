import * as React from "react"
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

import { env } from "@/env"
import { siteConfig } from "@/config/site"

const HOST_NAME = env.HOST_NAME

export function VerifyEmail({ token }: { token: string }) {
  const verifyEmailHref = `${HOST_NAME}/api/auth/verify-email?token=${token}`
  return (
    <Html>
      <Head />
      <Preview>Verify your Email</Preview>
      <Tailwind>
        <React.Fragment>
          <Body className="mx-auto my-auto bg-white font-sans">
            <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
              <Section className="mt-[32px]">
                <Img
                  src={`${HOST_NAME}/group.jpeg`}
                  width="160"
                  height="48"
                  alt="StarterKit"
                  className="mx-auto my-0"
                />
              </Section>

              <Section className="mb-[32px] mt-[32px] text-center">
                <Text className="mb-8 text-[14px] font-medium leading-[24px] text-black">
                  Click the following link to verify your email
                </Text>

                <Text className="text-[14px] font-medium leading-[24px] text-black">
                  <Link
                    href={verifyEmailHref}
                    target="_blank"
                    className="text-[#2754C5] underline"
                  >
                    Verify Email
                  </Link>
                </Text>
              </Section>

              <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />

              <Text className="flex items-center justify-center text-[12px] leading-[24px] text-[#666666]">
                © {new Date().getFullYear()} {siteConfig.name}. All rights
                reserved.
              </Text>
            </Container>
          </Body>
        </React.Fragment>
      </Tailwind>
    </Html>
  )
}
