import { render, screen, cleanup, within } from '@testing-library/react';
import Quiz from '../quiz';


afterEach(() => {
    cleanup();
})

test('should render quiz', () => {
    render(<Quiz/>);
    const quizScreen = screen.getByTestId('quiz-screen');
    expect(quizScreen).toBeInTheDocument();
})

test('should render questions first', () => {
    render(<Quiz/>);
    const showScore = Quiz.showScore;
    const questionScreen = screen.getByTestId('question-screen');
    if (!showScore) {
        expect(questionScreen).toBeInTheDocument();
    }
})

test('should render question number', () => {
    render(<Quiz/>);
    const number = screen.getByTestId('question-num');
    expect(number).toBeInTheDocument();
})

test('should render answer box', () => {
    render(<Quiz/>);
    const answers = screen.getByTestId('answer-box');
    expect(answers).toBeInTheDocument();
})

test('should render buttons', () => {
    render(<Quiz/>);
    const button = screen.getAllByTestId('button');
    expect(button).toHaveLength(6);
})

test('should render questions in the button', () => {
    render(<Quiz />);
    const { getByText } = within(screen.getByTestId('answer-box'));
    expect(getByText('English Research Paper')).toBeInTheDocument();
    expect(getByText('Stock Change Spreadsheet')).toBeInTheDocument();
    expect(getByText('I like all assignments equally')).toBeInTheDocument();
    expect(getByText('Speech Draft')).toBeInTheDocument();
    expect(getByText('Science Lab')).toBeInTheDocument();
    expect(getByText('Government Project')).toBeInTheDocument();
})