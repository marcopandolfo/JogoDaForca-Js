const createSprite = (seletor) => {

    const moveFrame = (from, to) => {
        $el.removeClass('frame' + from);
        $el.addClass('frame' + to);
    };

    const hasNext = () => {
        return currentFrame + 1 <= 9;
    };

    const nextFrame = () => {
        if(hasNext()) {
            currentFrame++;
            moveFrame((currentFrame - 1), currentFrame);
        }
    };

    const reset = () => {
        moveFrame(currentFrame, 1);
        currentFrame = 1;
    };

    const isFinished = () => {
        return !hasNext();
    };

    let currentFrame = 1;
    const $el = $(seletor);
    $el.addClass('frame' + currentFrame);

    return {
        nextFrame: nextFrame,
        reset: reset,
        isFinished: isFinished,
    };
};
