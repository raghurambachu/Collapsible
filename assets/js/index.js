let arrayOfFaqs = [
    {
      "question": " Who is it for?",
      "answer": "Recent college graduates, students taking gap year, dropouts, professionals looking to switch careers, anyone learning web development but needs right environment and guidance. No prior programming knowledge required."
    },
    {
      "question": " What is the duration of the program? Do I have to stay there for entire duration?",
      "answer": "6 months, full-time. Yes, we need your commitment. Of course you can leave if you land a job before the end of the program."
    },
    {
      "question": " What is the cost of the program?",
      "answer": "You don't pay anything until you get a job. If you get a job paying more than ₹50k/month then you give us 20% of your salary for 1 year. Maximum you pay us is ₹3 Lakhs."
    },
    {
      "question": " How do you make sure that students pay you once you they get a job?",
      "answer": "Students enter an income sharing agreement(ISA) with us when they join AltCampus."
    },
    {
      "question": " Do I have to cover my living expenses?",
      "answer": "Yes. We have a small, distributed campus here. It costs ₹8k/month(stay+food)."
    },
    {
      "question": " How does the application process look like?",
      "answer": "You fill up the form. One of us will contact you over email. We will send you a small task, primarily to see your interest level. After you have completed the task, we will have a video call.\n      If all goes well, book your tickets. \n      "
    },
    {
      "question": " Does AltCampus help me get a job?",
      "answer": "Yes. All we can. We help you at every stage, help you build strong portfolio, prepare for interviews, even suggest companies to apply to. You have to write the job application yourself, though we will help in that too. We are also building a network of hiring partners. "
    },
    {
      "question": " How many students in a batch?",
      "answer": "Currently, a batch can have 12 students at max."
    },
    {
      "question": " When does a new batch start?",
      "answer": "A new batch starts on the 1st of every month."
    },
    {
      "question": " Why Offline?",
      "answer": "Learning is a lot about the right environment. It's easier to create it when everyone is in the same location. There is a lot of intangible value that only-online-courses miss out on e.g. friendships, soft skills, motivation, spirit of shipping, and hi-fives etc. \n      Also, what we have to offer is very unique to us, things that are hard to transfer online. \n      Maybe we can offer part of our courses online in future.\n      "
    },
    {
      "question": " Why Dharamshala?",
      "answer": "Dharamshala is a beautiful Himalayan town and has a small tech community. It's relatively cheaper as compared to other metros in India which means its less burdening for everyone, us and the students. \n      We moved here couple of years ago and can't imagine going anywhere else. Wake up to great views, fresh air and water. Heck, unlike metros we don't have to pay for playing ground or drinking water. Thanks internet.\n      "
    }
  ];

  const collapsibleContainer = document.querySelector(".collapsible-container");



  function createUI(data = arrayOfFaqs,root=collapsibleContainer){
    root.innerHTML = "";
    let stringOfLis = data.map(faq => {
        return `
            <li class="collapsible">
                <div class="question flex">
                    <span class="question-icon"><i class="fas fa-question"></i></span>
                    <h4 class="collapsible-question">
                    ${faq.question}
                    </h4>
                </div>
                <div class="answer flex">
                    <span class="answer-icon"><i class="fab fa-atlassian"></i></span>
                    <p class="collapsible-answer">${faq.answer}</p>
                </div>
                <button class="btn btn-expand"><i class="fas fa-chevron-down"></i></button>
            </li>
        `
    }).join("");
    root.innerHTML = stringOfLis
  }

  createUI();

  function handleClickOnExpandButton(event){
    if(!event.target.closest(".btn-expand")) return;
    const element = event.target.closest(".btn-expand");
    element.querySelector("i").classList.toggle("fa-times");
    element.parentElement.querySelector(".answer").classList.toggle("active");

    element.parentElement.querySelector(".question").classList.toggle("green-text");

    element.parentElement.classList.toggle("collapsible-active")
  }

  document.body.addEventListener("click",function(event){
      handleClickOnExpandButton(event)
  })

