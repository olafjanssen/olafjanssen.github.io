---
title: "FoCal: Death to To Do lists"
tag: todohate
image: todohate.png
description: For someone with anxiety, the flurry of well-intended productivity tips online is hell. They might work really well for some people, but not for me. To do lists are on the top of my hate list.
date: 2016-06-09
type: project
layout: project.html
---

There are so many To Do list applications, a *flurry* of task management apps, project management, collaboration tools and what not. With so many tools trying to solve things one way (with many variations), there must be another way.

What do these apps try to do? Well, they try to offload all those things you might forget from your mind to somewhere else. Since you now do not have to worry about forgetting things and are sure everything you need to know is somewhere safe helps you to relax. There is less cognitive load and a higher chance on happiness.

You can’t offload structure 100% though. If you are a bit more chaotic in nature, and we all are in some degree, maybe us imaginative idealists a tad more, then you might be really tempted by the structure of such apps. But it also requires a great deal of structured thinking and behavior to be able to keep up filling and using your To Do and Task Management tools. This is the first thing that goes wrong, my To Do lists are hardly ever complete, the deadlines are not properly set. Hence, I still worry and my mind is not properly offloaded. And more anxiety pursues.

The second reason is that whether you offload your tasks or not, there are specific tasks to be done within a certain time frame and for someone with high-functioning anxiety, happiness can only be reached if the task list is empty, which it will never be. That does not sound like a recipe for happiness to me.

Recent email apps do a nicer job. In Mailbox and comparable apps you can perform a triage on your mail, similar to what nurses do in field hospitals. You can declare an email dead and useless and you delete it, you consider it actionable so you respond to it and then archive it. The final option is to postpone it, it will leave your inbox and return at some point in the future when you are able to act on it. This way your email box and by extension of the concept your to do list will be empty. 

But that is a half truth. In practice you keep postponing delayed mails and however you turn it, you are still being controlled by the tasks and mails sent your way by others. How can you prevent being controlled by your tasks and regain autonomy?

There are 3 factors that need to be put in order to make this work. 

## Offload your tasks before you see them
Ideally all tour incoming mail should be filtered and categorized away before you even see them. For an IT savy person this translated into elaborate filters for incoming mail to transfer them somewhere out of sight until you choose to look at them. For a regular person I can imagine a colleague, or a friend doing  this once a day for you. You could return the favor. Since you won't have any relation to the incoming mail you are not bothered by the work it entails. Unless you are highly sensitive though, in which case you could hire a personal assistant. 

## Have a recurring planning, suggested only
We don't want to be reminded about all the tasks we have to do. At the same time we want to remember all the topics we are passionate about. Therefore I suggest creating a recurring schedule of topics you work on. Let the schedule be easy and flexible, allow overlap, it is merely a suggestion as we will see.  You can create several overlapping rotating schedules for each type of topic with different time intervals. 

For instance. I like learning new languages. I feel constricted by learning only one at a time but I sometimes get carried away and forget the other cool languages that I started and for which the neural connections are slowly withering away. So I have a weekly rotating schedule. I have a set of languages: Turkish, Swedish and Finnish. Every week I am notified about the next language and it will show up in my daily calendar. Is it a task? No. I may ignore it but I am still gently nudged into switching to learning the next language. 

Next to that I have a daily schedule for all my possible hobbies or side projects. Ideally you have either less or more than 7 so that every  week you will reminded about you project on a different day. For next school semester I will try to create such a schedule so that every day I am reminded of a certain responsibility in my teaching job. 

Remember, the key element is that you do not consider the reminders tasks so you should not name them as such. Do not call it 'prepare for meetings day' but specify only the topic 'marketing' or 'my wife'. The reason is that you should not feel obliged to work on it if you feel otherwise but if you have nothing else on your mind it would probably be good to work on that topic. Autonomy is key here. 

## Work on it as much as feels right
The feeling that is balanced during work is motivation. There is intrinsic motivation: you genuinely feel an urge to work on it out of pure self-fulfillment. And there is extrinsic motivation: people expect you to finish certain things and things depend on your output. There are many parameters that determine the balance in motivation: your physical and psychological condition, your sense of responsibility, the impact of both intrinsic and extrinsic motivation, the conditions of the tasks at hand and whether a state of flow is possible and time available to you to name a few. 

If the work suits you, you work on it until it is enough. If you cannot finish it in time it was too much work and it will have to wait for another moment. If you consistently lack the motivation you should either reconsider working on this topic or delegating certain tasks to other people. 

I am not saying your job should only be fun and care-free, for some the extrinsic motivation and sense of responsibility is very strong without eating away their motivation. But if it happens, it is time to make some changes. 

## Product
So what have I made is the following `FoCal.php` script:
* A script that generates a server-based `.ics` file that can be included in your calendar or linked to from a calendar, using the [Eluceo](https://github.com/eluceo/iCal) library
* It allows for groups of activities to appear recurrantly in your calendar, e.g. for a category language learning that should be done every Friday, it will add a different language in the calendar every Friday.

<pre><code class="language-php">
/**
 * Turn a focus model into a calendar
 *
 * User: olafjanssen
 * Date: 04/06/16
 */
require __DIR__ . '/../../vendor/autoload.php';

// Set headers
header('Content-Type: text/calendar; charset=utf-8');
header('Content-Disposition: attachment; filename="focal.ics"');

$fileName = 'focal.ics';

if (!file_exists($fileName)) {

    $groups = array(
        array('name' => 'Language learning', 'durationDays' => 7, 'topics' => array('Turkish', 'Swedish', 'Arabic')),
        array('name' => 'Projects', 'durationDays' => 1, 'topics' => array('Visual Summary', 'Toki Pona Sitelen Sitelen', 'Arduinoing', 'Poetic Drawing', 'Blog Writing'))
    );

    date_default_timezone_set('Europe/Berlin');

    $vCalendar = new \Eluceo\iCal\Component\Calendar('Flurry Flakes FoCal');

    foreach ($groups as $group) {

        // Set recurrence rule
        $recurrenceRule = new \Eluceo\iCal\Property\Event\RecurrenceRule();
        $recurrenceRule->setFreq($group['durationDays'] == 7 ? \Eluceo\iCal\Property\Event\RecurrenceRule::FREQ_WEEKLY : \Eluceo\iCal\Property\Event\RecurrenceRule::FREQ_DAILY);
        $recurrenceRule->setInterval(count($group['topics']));
        $recurrenceRule->setUntil(new \DateTime('2018-1-1'));

        $startDate = '2016-2-1';

        foreach ($group['topics'] as $index => $topic) {
            $vEvent = new \Eluceo\iCal\Component\Event();
            $vEvent->setDtStart((new \DateTime('2016-2-1'))->add(new \DateInterval('P' . ($index * $group['durationDays']) . 'D')));
            $vEvent->setDtEnd((new \DateTime('2016-2-1'))->add(new \DateInterval('P' . (($index + 1) * $group['durationDays']) . 'D')));
            $vEvent->setNoTime(true);
            $vEvent->setDescription($topic);
            $vEvent->setSummary($topic);
            $vEvent->setRecurrenceRule($recurrenceRule);
            // Adding Timezone (optional)
            $vEvent->setUseTimezone(true);

            $vCalendar->addComponent($vEvent);
        }

    }
    
    file_put_contents($fileName, $vCalendar->render());
}

readfile($fileName);
</code></pre>

## Reflection
In the end, I have not used this calendar for a very long time. Haha, joke is on me. I just hate planners too much; but I might come up with another idea or solution.