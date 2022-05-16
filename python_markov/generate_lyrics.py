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

    changed_periods = raw_output.replace(". ", ". \n")
    changed_qmarks = changed_periods.replace("? ", "? \n")
    changed_exc_points = changed_qmarks.replace("!", "! \n")

    split_into_lines = changed_exc_points.splitlines(True)

    i = 4
    while i < len(split_into_lines):
        split_into_lines.insert(i, "\n")
        i += 5

    split_into_lines.reverse()
    final_line_break_index = split_into_lines.index("\n")
    final_line_break_index = len(split_into_lines) - final_line_break_index - 1
    split_into_lines.reverse()

    stripped_excess = split_into_lines[:final_line_break_index]
    print(' '.join(stripped_excess))
    return ' '.join(stripped_excess)
