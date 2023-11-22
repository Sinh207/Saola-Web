import { useEffect, useState } from 'react';
import { IMAGE_CONST } from '@app/utils/images';

// styled
import {
  StyledSection,
  StyledContainer,
  StyledImage,
  StyledH2,
  StyledForm,
  StyledImageUpload,
  StyledCustomFileLabel,
  StyledCustomFileInput,
  StyledFooter,
} from './styled';

// antd
import {
  Col,
  Row,
  Form,
  Input,
  Select, Button,
} from 'antd';

const { TextArea } = Input;

const MainSection = () => {
  const [submittable, setSubmittable] = useState(false);

  const [form] = Form.useForm();
  const values = Form.useWatch([], form);

  const onFinish = (values) => {};

  useEffect(() => {
    form.validateFields({
      validateOnly: true,
    }).then(
      (values) => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      },
    );
  }, [values]);

  return (
    <StyledSection className="main-section">
      <StyledContainer
        style={{
          backgroundImage: `url(${IMAGE_CONST.contact.backgroundMainContact})`,
        }}
        className="container"
      >
        <Row>
          <Col span={24}>
            <StyledH2>What are you looking for?</StyledH2>
            <StyledForm form={form} onFinish={onFinish} name="validateOnly" layout="vertical">
              <Row gutter={12}>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Enter your name',
                      },
                    ]}
                  >
                    <Input placeholder="Your name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Enter your email address',
                      },
                    ]}
                  >
                    <Input placeholder="Email address" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name="Message"
                  >
                    <TextArea
                      rows={4}
                      placeholder="Enter your message"
                      autoSize={{ minRows: 4, maxRows: 10 }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="service"
                  >
                    <Select
                      options={[
                        {
                          value: 'design',
                          label: 'Design',
                        },
                      ]}
                      placeholder="Service"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="budget_range"
                  >
                    <Select
                      options={[
                        {
                          value: 'budget_range',
                          label: 'Budget range',
                        },
                      ]}
                      placeholder="Budget range"
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name="relevant_documents"
                  >
                    <StyledImageUpload>
                      <StyledCustomFileLabel className="upload" for="file-input">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M10.306 21.75C8.39599 21.75 6.61698 21.021 5.29598 19.697C2.50998 16.903 2.55317 12.314 5.39217 9.46796L11.1202 3.72397C12.0672 2.77397 13.328 2.25098 14.668 2.25098C16.008 2.25098 17.2691 2.77397 18.2161 3.72397C20.1701 5.68397 20.1701 8.87298 18.2161 10.833L12.46 16.604C11.372 17.696 9.47318 17.697 8.38118 16.604C7.25818 15.478 7.25818 13.646 8.38118 12.52L13.4371 7.44998C13.7301 7.15698 14.2051 7.15597 14.4981 7.44897C14.7921 7.74097 14.7921 8.21598 14.5001 8.50998L9.44417 13.58C8.90317 14.122 8.90317 15.004 9.44417 15.546C9.96517 16.07 10.877 16.069 11.398 15.546L17.1541 9.77496C18.5261 8.39896 18.5261 6.15997 17.1541 4.78397C15.8261 3.45197 13.5112 3.45197 12.1832 4.78397L6.45516 10.528C4.23616 12.752 4.19297 16.467 6.35897 18.639C7.39597 19.679 8.79699 20.251 10.306 20.251C11.853 20.251 13.36 19.629 14.442 18.544L19.4691 13.502C19.7611 13.209 20.2361 13.208 20.5301 13.501C20.8241 13.793 20.8241 14.268 20.5321 14.562L15.505 19.604C14.143 20.967 12.248 21.75 10.306 21.75Z" fill="white" />
                        </svg>
                        <span>
                          Relevant documents
                        </span>
                      </StyledCustomFileLabel>
                      <StyledCustomFileInput
                        type="file"
                        id="file-input"
                        name="file-input"
                        accept="image/jpeg,image/png,image/heic,video/mp4,video/avi,video/mkv,video/quicktime"
                      />
                    </StyledImageUpload>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={12}>
                <Col span={24}>
                  <StyledFooter>
                    <Button
                      className="btn-send-message"
                      onClick={() => form.submit()}
                    >
                      Send message
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M18.0766 10.2392C18.0449 10.3159 17.9992 10.385 17.9417 10.4425L12.1084 16.2758C11.9867 16.3975 11.8267 16.4591 11.6667 16.4591C11.5067 16.4591 11.3466 16.3983 11.225 16.2758C10.9808 16.0317 10.9808 15.6358 11.225 15.3916L15.9916 10.625H2.5C2.155 10.625 1.875 10.345 1.875 9.99998C1.875 9.65498 2.155 9.37498 2.5 9.37498H15.9908L11.2242 4.60834C10.98 4.36417 10.98 3.96831 11.2242 3.72414C11.4683 3.47997 11.8642 3.47997 12.1084 3.72414L17.9417 9.55747C17.9992 9.61497 18.0449 9.68405 18.0766 9.76072C18.1399 9.91405 18.1399 10.0859 18.0766 10.2392Z" fill="#101717" />
                      </svg>
                    </Button>
                  </StyledFooter>
                </Col>
              </Row>
            </StyledForm>
          </Col>
        </Row>
      </StyledContainer>
    </StyledSection>
  );
};
export default MainSection;
