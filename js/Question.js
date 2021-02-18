class Question{
    constructor(){
        this.title = createElement('h1');
        this.question = createElement('h2');
        this.option1 = createElement('h3');
        this.option2 = createElement('h3');
        this.option3 = createElement('h3');
        this.option4 = createElement('h3');
        this.answerInput = createInput("Enter your option no.");
        this.nameInput = createInput("Enter your name");
        this.submit = createButton("Submit");
    }

    hide(){
        this.question.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
        this.answerInput.hide();
        this.nameInput.hide();
        this.submit.hide();
    }

    display(){
       
        this.title.html("My Quiz Game");
        this.title.position(350,0);

        this.question.html("Question:- What starts with the letter 'E', but has only one letter in it?");
        this.question.position(130,80);

        this.option1.html("1. Everyone");
        this.option1.position(150,110);
        this.option2.html("2. Envelope");
        this.option2.position(150,140);
        this.option3.html("3. Estimate");
        this.option3.position(150,170);
        this.option4.html("4. Example");
        this.option4.position(150,200);

        this.answerInput.position(340,270);
        this.nameInput.position(150,270);

        this.submit.position(225,300);

        this.submit.mousePressed(()=>{
            this.answerInput.hide();
            this.nameInput.hide();
            this.submit.hide();
            contestant.name = this.nameInput.value();
            contestant.answer = this.answerInput.value();
            contestantCount+=1;
            contestant.index=contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        })
    }
}