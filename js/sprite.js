const createSprite = (seletor) => {
    let currentFrame = 1;
    const $el = $(seletor);
    $el.addClass('frame' + currentFrame);

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

    return {
        nextFrame: nextFrame,
    };
};
