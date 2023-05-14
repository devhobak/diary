import React from 'react';
import { WriteSection } from './style/inputSection';

export default function InputSection() {
    return (
        <WriteSection>
            <form>
                <h2 className="ir">게시물 작성</h2>
                <input></input>
                <textarea></textarea>
                <input type="file" accept="*/image"></input>
                <button type="button">완료</button>
            </form>
        </WriteSection>
    );
}
