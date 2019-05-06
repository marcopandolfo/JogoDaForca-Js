/* eslint-disable no-use-before-define */
/* eslint-disable prefer-template */
// eslint-disable-next-line no-unused-vars
const createSprite = (seletor) => {
    const moveFrame = (from, to) => {
        $el.removeClass('frame' + from);
        $el.addClass('frame' + to);
    };

    const hasNext = () => currentFrame + 1 <= 9;

    const nextFrame = () => {
        if (hasNext()) {
            currentFrame += 1;
            moveFrame((currentFrame - 1), currentFrame);
        }
    };

    const reset = () => {
        moveFrame(currentFrame, 1);
        currentFrame = 1;
    };

    const isFinished = () => !hasNext();

    let currentFrame = 1;
    const $el = $(seletor);
    $el.addClass('frame' + currentFrame);

    return {
        nextFrame,
        reset,
        isFinished,
    };
};
