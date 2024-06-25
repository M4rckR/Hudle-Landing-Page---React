import { InformacionArticle } from "./InformacionArticle"

export const SeccionInfo = () => {
  return (
    <section>
        <InformacionArticle 
            title='Grow Together'
            description="Generate meaningful discussions with your audience and build a strong, loyal community. 
            Think of the insightful conversations you miss out on with a feedback form."
            image='/img/illustration-grow-together.svg'
            wave= {true}
            styleWave = {1}
            reverse = {true}
            background = 'bg-m-pale-blue'
        />
        <InformacionArticle 
            title='Flowing Conversations'
            description="You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
            just-in-time loading for a more natural flow."
            image='/img/illustration-flowing-conversation.svg'
            wave= {false}
            reverse = {false}
            background = 'white'
        />
        <InformacionArticle 
            title='Your Users'
            description="It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
            once signed in to your app, your users can start chatting immediately."
            image='/img/illustration-your-users.svg'
            wave= {true}
            styleWave = {2}
            reverse = {true}
            background = 'bg-m-pale-blue'
        />
    </section>
  )
}
