// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Novu, ChannelTypeEnum } from '@novu/node'
import { SendgridEmailProvider } from '@novu/sendgrid'

type Data = {
    name: string
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const novu = new Novu()
    const apiKey = process.env.SENDGRID as string
    if (process.env.SENDGRID) {
        await novu.registerProvider(
            new SendgridEmailProvider({
                apiKey,
            })
        )
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const passwordResetTemplate = await novu.registerTemplate({
        id: 'password-reset',
        messages: [
            {
                subject: 'Your password reset request',
                channel: ChannelTypeEnum.EMAIL,
                template: `
                Hi {{firstName}}!
                
                To add your heatlh points  click <a href="{{resetLink}}">here.</a>
                
                {{#if organization}}
                  <img src="{{organization.logo}}" />
                {{/if}}
            `,
            },
        ],
    })
    await novu.trigger('<REPLACE_WITH_EVENT_NAME>', {
        $user_id: '<USER IDENTIFIER>',
        $email: 'test@email.com',
        firstName: 'John',
        lastName: 'Doe',
    })
    res.status(200).json({ name: 'Subham Kundu' })
}
