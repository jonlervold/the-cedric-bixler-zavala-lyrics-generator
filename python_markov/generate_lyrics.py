import random


def generate_bixler():
    word_count = 300

    text_input = open(r'lyrics.txt',
                      encoding='utf8').read()

    all_original_lyrics = text_input.split()

    def make_pairs(all_original_lyrics):
        for i in range(len(all_original_lyrics)-1):
            yield (all_original_lyrics[i], all_original_lyrics[i+1])
    pairs = make_pairs(all_original_lyrics)

    word_match_dictionary = {}
    for word_1, word_2 in pairs:
        if word_1 in word_match_dictionary.keys():
            word_match_dictionary[word_1].append(word_2)
        else:
            word_match_dictionary[word_1] = [word_2]

    first_word = random.choice(all_original_lyrics)

    while first_word.islower():
        first_word = random.choice(all_original_lyrics)
    raw_generated_lyrics = [first_word]

    try:
        for i in range(word_count):
            raw_generated_lyrics.append(random.choice(
                word_match_dictionary[raw_generated_lyrics[-1]]))
    except KeyError:
        pass

    raw_output = (' '.join(raw_generated_lyrics))

    added_breaks = raw_output.replace(". ", ". \n").replace(
        "? ", "? \n").replace("!", "! \n")

    split_into_lines = added_breaks.splitlines(True)

    i = 4
    while i < len(split_into_lines):
        split_into_lines.insert(i, "\n")
        i += 5

    fourth_line_break_index = [index for index, list_item in enumerate(
        split_into_lines) if list_item == "\n"][3]

    stripped_excess = split_into_lines[:fourth_line_break_index]
    print(' '.join(stripped_excess))
    return ' '.join(stripped_excess)


generate_bixler()
