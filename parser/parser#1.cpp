#include <cstdio>
#include <cstring>
#include <string>
#include <iostream>
#include <cstdlib>
#include <queue>
#include <vector>
#include <cctype>
#include <map>
#include <unordered_map>
using namespace std;

class Reader{
    private:
        int pt;
        string str;
        int len;
    public:
        Reader();
        Reader(string usr_str);
        Reader(const Reader &obj);
        char peek(int k);
        char consume(int k);
        bool is_EOF();
};

class TokenValue {
    private:
        char token_val_char;
        string token_val_string;
        int token_val_int;
    public:
        TokenValue();
        TokenValue(char input_val);
        TokenValue(string input_val);
        TokenValue(int input_val);
        char GetCharValue();
        string GetStringValue();
        int GetIntValue();
};

class Token{
    private:
        string token_class;
        TokenValue token_val;
    public:
        Token(string input_class, char input_val);
        Token(string input_class, string input_val);
        Token(string input_class, int input_val);
        //Token(string input_class, auto input_val);
        string getTokenClass();
        TokenValue getTokenValue();
};

class Lexer{
    private:
        int pt;  
        Reader reader;
        vector <Token> token_list; 
        Token processDefault();
        Token processNumericLiteral();
    public:
        Lexer();
        Lexer(Reader input_reader);
        void evaluate();
        Token nextToken();

};
Lexer::Lexer() {
    reader = Reader();
    token_list.clear();
    pt = 0;
}
Lexer::Lexer(Reader input_reader) {
    reader = input_reader;
    token_list.clear();
    pt = 0;
}

Token Lexer::nextToken() {
    char nextChar = reader.peek(1);
    
    switch (nextChar) {
        case '+':
        case '-':
        case '*':
        case '/':
            return Token("biOperator", nextChar);
        case '(':
        case ')':
            return Token("parenthesis", nextChar);
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            return processNumericLiteral();
        case ' ':
            break;
        case ';':
            return Token("colon", nextChar);
        default:
            return Token("EOF", 0);
    }
    
}

Token Lexer::processDefault() {
    Token nxt_token = nextToken();
    token_list.push_back(nxt_token);
    return nxt_token.getTokenClass() == "EOF" ? nxt_token : processDefault();
}

Token Lexer::processNumericLiteral() {
    char nextChar = reader.consume(1);
    int sum = 0;
    while(isdigit(nextChar)) {
        sum = sum * 10 + nextChar - '0';
        nextChar = reader.consume(1);
    }
    return Token("number", sum);
}
void Lexer::evaluate() {
    processDefault();
}

int main() {
    string input;
    cin >> input;
    Reader reader = Reader(input);
    printf("%c\n", reader.peek(1));
    Lexer lexer = Lexer(reader);
    lexer.evaluate();
    system("pause");
    return 0;
}

// Reader Class

Reader::Reader() {
    str = "";
    len = 0;
    pt = 0;
}
Reader::Reader(string usr_str) {
    str = usr_str;
    len = str.length();
    pt = 0;
}
Reader::Reader(const Reader &obj) {
    this->pt = obj.pt;
    this->str = obj.str;
    this->len = obj. len;
}
char Reader::peek(int k) {
    return (str[pt + k]);
}
char Reader::consume(int k) {
    pt = pt + k;
    return (str[pt]);
}
bool Reader::is_EOF() {
    return pt == len ? true : false;
}

//TokenValue Class

TokenValue::TokenValue() {
}
TokenValue::TokenValue(char input_val) {
    token_val_char = input_val;
}
TokenValue::TokenValue(string input_val) {
    token_val_string = input_val;
}
TokenValue::TokenValue(int input_val) {
    token_val_int = input_val;
}
char TokenValue::GetCharValue() {
    return token_val_char;
}
string TokenValue::GetStringValue() {
    return token_val_string;
}
int TokenValue::GetIntValue() {
    return token_val_int;
}

//Token Class


Token::Token(string input_class, char input_val) {
    token_class = input_class;
    token_val = TokenValue(input_val);
}
Token::Token(string input_class, string input_val) {
    token_class = input_class;
    token_val = TokenValue(input_val);
}
Token::Token(string input_class, int input_val) {
    token_class = input_class;
    token_val = TokenValue(input_val);
}

string Token:: getTokenClass() {
    return token_class;
}
/*
auto Token:: getTokenValue() {
    if(token_class == "biOperator" || token_class == "parenthesis") {
        return token_val.GetCharValue();
    } else if(token_class == "numbers") {
        return token_val.GetIntValue();
    } else if(token_class == "strings") {
        return token_val.GetStringValue();
    } else {
        return token_val.GetIntValue();   //Need to update Error handler
    }       
}
*/
TokenValue Token:: getTokenValue() {
    return token_val;
}

