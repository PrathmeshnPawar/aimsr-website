"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import React, { Component } from "react";
import Navbar from "../../../../components/Navbar";
import { toast } from "react-hot-toast";

// Types
interface PersonalDetailsData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  address: string;
}

interface AcademicDetailsData {
  tenth: {
    schoolName: string;
    board: string;
    yearOfPassing: string;
    percentage: string;
  };
  twelfth: {
    schoolName: string;
    board: string;
    yearOfPassing: string;
    percentage: string;
  };
  graduation: {
    collegeName: string;
    university: string;
    degree: string;
    percentage: string;
  };
}

interface DocumentsData {
  photo: File | null;
  tenthMarksheet: File | null;
  twelfthMarksheet: File | null;
  graduationMarksheet: File | null;
}

interface State {
  email: string;
  activeStep: number;
  personalDetails: PersonalDetailsData;
  academicDetails: AcademicDetailsData;
  documents: DocumentsData;
  error: string;
}

const steps: string[] = [
  "Personal Details",
  "Academic Details",
  "Documents Upload",
];

class AdmissionForm extends Component<{}, State> {
  state: State = {
    email: "",
    activeStep: 0,
    personalDetails: {
      fullName: "",
      dateOfBirth: "",
      gender: "",
      email: "",
      address: "",
    },
    academicDetails: {
      tenth: {
        schoolName: "",
        board: "",
        yearOfPassing: "",
        percentage: "",
      },
      twelfth: {
        schoolName: "",
        board: "",
        yearOfPassing: "",
        percentage: "",
      },
      graduation: {
        collegeName: "",
        university: "",
        degree: "",
        percentage: "",
      },
    },
    documents: {
      photo: null,
      tenthMarksheet: null,
      twelfthMarksheet: null,
      graduationMarksheet: null,
    },
    error: "",
  };

  private readonly API_URL = "https://localhost:5001/api/admission";

  updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({
      personalDetails: {
        ...this.state.personalDetails,
        email: e.target.value,
      },
    });
  };

  handleNext = (event: React.FormEvent): void => {
    event.preventDefault(); // Add preventDefault
    const form = event.currentTarget as HTMLFormElement;
    if (form.checkValidity()) {
      this.setState((prevState) => ({
        activeStep: prevState.activeStep + 1,
      }));
    } else {
      form.reportValidity();
    }
  };

  handleBack = (): void => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleCancel = (): void => {
    window.history.back();
  };

  handlePersonalDetailsChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      personalDetails: {
        ...prevState.personalDetails,
        [name]: value,
      },
    }));
  };

  handleGenderChange = (value: string): void => {
    this.setState((prevState) => ({
      personalDetails: {
        ...prevState.personalDetails,
        gender: value,
      },
    }));
  };

  handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof DocumentsData,
  ): void => {
    const file = event.target.files?.[0] || null;
    this.setState((prevState) => ({
      documents: {
        ...prevState.documents,
        [field]: file,
      },
    }));
  };

  PersonalDetails = () => (
    <div
      className={`${this.state.activeStep === 0 ? "block" : "hidden"} space-y-6`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Input
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            value={this.state.personalDetails.fullName}
            onChange={this.handlePersonalDetailsChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={this.state.personalDetails.dateOfBirth}
            onChange={this.handlePersonalDetailsChange}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Select
            value={this.state.personalDetails.gender}
            onValueChange={this.handleGenderChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={this.state.personalDetails.email}
            onChange={this.updateEmail}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Textarea
          id="address"
          name="address"
          value={this.state.personalDetails.address}
          onChange={this.handlePersonalDetailsChange}
          placeholder="Address"
          required
          autoFocus={false}
        />
      </div>
    </div>
  );

  AcademicDetails = () => (
    <div
      className={`${this.state.activeStep === 1 ? "block" : "hidden"} space-y-6`}
    >
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">10th Standard Details</h3>
        <div className="space-y-2">
          <Input
            id="tenthSchool"
            placeholder="School Name"
            value={this.state.academicDetails.tenth.schoolName}
            onChange={(e) =>
              this.setState((prevState) => ({
                academicDetails: {
                  ...prevState.academicDetails,
                  tenth: {
                    ...prevState.academicDetails.tenth,
                    schoolName: e.target.value,
                  },
                },
              }))
            }
            required
          />
          <Input
            placeholder="Board"
            value={this.state.academicDetails.tenth.board}
            onChange={(e) =>
              this.setState((prevState) => ({
                academicDetails: {
                  ...prevState.academicDetails,
                  tenth: {
                    ...prevState.academicDetails.tenth,
                    board: e.target.value,
                  },
                },
              }))
            }
            required
          />
          <Input
            type="number"
            placeholder="Year of Passing"
            value={this.state.academicDetails.tenth.yearOfPassing}
            onChange={(e) =>
              this.setState((prevState) => ({
                academicDetails: {
                  ...prevState.academicDetails,
                  tenth: {
                    ...prevState.academicDetails.tenth,
                    yearOfPassing: e.target.value,
                  },
                },
              }))
            }
            required
          />
          <Input
            type="number"
            placeholder="Percentage"
            value={this.state.academicDetails.tenth.percentage}
            onChange={(e) =>
              this.setState((prevState) => ({
                academicDetails: {
                  ...prevState.academicDetails,
                  tenth: {
                    ...prevState.academicDetails.tenth,
                    percentage: e.target.value,
                  },
                },
              }))
            }
            required
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">12th Standard Details</h3>
        <div className="space-y-2">
          <Input
            id="twelfthSchool"
            placeholder="School Name"
            value={this.state.academicDetails.twelfth.schoolName}
            onChange={(e) =>
              this.setState((prevState) => ({
                academicDetails: {
                  ...prevState.academicDetails,
                  twelfth: {
                    ...prevState.academicDetails.twelfth,
                    schoolName: e.target.value,
                  },
                },
              }))
            }
            required
          />
          <Input
            placeholder="Board"
            value={this.state.academicDetails.twelfth.board}
            onChange={(e) =>
              this.setState((prevState) => ({
                academicDetails: {
                  ...prevState.academicDetails,
                  twelfth: {
                    ...prevState.academicDetails.twelfth,
                    board: e.target.value,
                  },
                },
              }))
            }
            required
          />
          <Input
            type="number"
            placeholder="Year of Passing"
            value={this.state.academicDetails.twelfth.yearOfPassing}
            onChange={(e) =>
              this.setState((prevState) => ({
                academicDetails: {
                  ...prevState.academicDetails,
                  twelfth: {
                    ...prevState.academicDetails.twelfth,
                    yearOfPassing: e.target.value,
                  },
                },
              }))
            }
            required
          />
          <Input
            type="number"
            placeholder="Percentage"
            value={this.state.academicDetails.twelfth.percentage}
            onChange={(e) =>
              this.setState((prevState) => ({
                academicDetails: {
                  ...prevState.academicDetails,
                  twelfth: {
                    ...prevState.academicDetails.twelfth,
                    percentage: e.target.value,
                  },
                },
              }))
            }
            required
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Graduation Details</h3>
        <div className="space-y-2">
          <Input
            id="collegeName"
            placeholder="College Name"
            value={this.state.academicDetails.graduation.collegeName}
            onChange={(e) =>
              this.setState((prevState) => ({
                academicDetails: {
                  ...prevState.academicDetails,
                  graduation: {
                    ...prevState.academicDetails.graduation,
                    collegeName: e.target.value,
                  },
                },
              }))
            }
            required
          />
          <Input
            placeholder="University"
            value={this.state.academicDetails.graduation.university}
            onChange={(e) =>
              this.setState((prevState) => ({
                academicDetails: {
                  ...prevState.academicDetails,
                  graduation: {
                    ...prevState.academicDetails.graduation,
                    university: e.target.value,
                  },
                },
              }))
            }
            required
          />
          <Input
            placeholder="Degree"
            value={this.state.academicDetails.graduation.degree}
            onChange={(e) =>
              this.setState((prevState) => ({
                academicDetails: {
                  ...prevState.academicDetails,
                  graduation: {
                    ...prevState.academicDetails.graduation,
                    degree: e.target.value,
                  },
                },
              }))
            }
            required
          />
          <Input
            type="number"
            placeholder="Percentage"
            value={this.state.academicDetails.graduation.percentage}
            onChange={(e) =>
              this.setState((prevState) => ({
                academicDetails: {
                  ...prevState.academicDetails,
                  graduation: {
                    ...prevState.academicDetails.graduation,
                    percentage: e.target.value,
                  },
                },
              }))
            }
            required
          />
        </div>
      </div>
    </div>
  );

  DocumentUpload = () => (
    <div
      className={`${this.state.activeStep === 2 ? "block" : "hidden"} space-y-6`}
    >
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Upload your Photograph</h3>
        <Input
          type="file"
          accept="image/*"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            this.handleFileChange(e, "photo")
          }
          required
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Upload your 10th Marksheet</h3>
        <Input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            this.handleFileChange(e, "tenthMarksheet")
          }
          required
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Upload your 12th Marksheet</h3>
        <Input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            this.handleFileChange(e, "twelfthMarksheet")
          }
          required
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">
          Upload your Graduation Marksheet
        </h3>
        <Input
          type="file"
          accept="application/pdf"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file && file.type !== "application/pdf") {
              this.setState({ error: "Please upload only PDF files" });
              e.target.value = "";
              return;
            }
            this.handleFileChange(e, "graduationMarksheet");
          }}
          required
        />
      </div>

      {this.state.error && (
        <div className="bg-destructive text-destructive-foreground p-4 rounded">
          {this.state.error}
        </div>
      )}
    </div>
  );

  getStepContent = (step: number): React.ReactNode => {
    switch (step) {
      case 0:
        return <this.PersonalDetails />;
      case 1:
        return <this.AcademicDetails />;
      case 2:
        return <this.DocumentUpload />;
      default:
        return "Unknown step";
    }
  };

  handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (form.checkValidity()) {
      const formData = new FormData();

      try {
        // Personal Details
        formData.append("fullName", this.state.personalDetails.fullName);
        formData.append("dateOfBirth", this.state.personalDetails.dateOfBirth);
        formData.append("gender", this.state.personalDetails.gender);
        formData.append("email", this.state.personalDetails.email);
        formData.append("address", this.state.personalDetails.address);

        // Academic Details
        formData.append(
          "tenthSchoolName",
          this.state.academicDetails.tenth.schoolName,
        );
        formData.append("tenthBoard", this.state.academicDetails.tenth.board);
        formData.append(
          "tenthYearOfPassing",
          this.state.academicDetails.tenth.yearOfPassing,
        );
        formData.append(
          "tenthPercentage",
          this.state.academicDetails.tenth.percentage,
        );

        formData.append(
          "twelfthSchoolName",
          this.state.academicDetails.twelfth.schoolName,
        );
        formData.append(
          "twelfthBoard",
          this.state.academicDetails.twelfth.board,
        );
        formData.append(
          "twelfthYearOfPassing",
          this.state.academicDetails.twelfth.yearOfPassing,
        );
        formData.append(
          "twelfthPercentage",
          this.state.academicDetails.twelfth.percentage,
        );

        formData.append(
          "graduationCollegeName",
          this.state.academicDetails.graduation.collegeName,
        );
        formData.append(
          "graduationUniversity",
          this.state.academicDetails.graduation.university,
        );
        formData.append(
          "graduationDegree",
          this.state.academicDetails.graduation.degree,
        );
        formData.append(
          "graduationPercentage",
          this.state.academicDetails.graduation.percentage,
        );

        // Documents
        if (this.state.documents.photo) {
          formData.append("photo", this.state.documents.photo);
        }
        if (this.state.documents.tenthMarksheet) {
          formData.append(
            "tenthMarksheet",
            this.state.documents.tenthMarksheet,
          );
        }
        if (this.state.documents.twelfthMarksheet) {
          formData.append(
            "twelfthMarksheet",
            this.state.documents.twelfthMarksheet,
          );
        }
        if (this.state.documents.graduationMarksheet) {
          formData.append(
            "graduationMarksheet",
            this.state.documents.graduationMarksheet,
          );
        }

        const response = await this.submitAdmissionForm(formData);
        if (response.success) {
          this.setState({ activeStep: steps.length });
          toast.success("Application submitted successfully!");
        }
      } catch (error) {
        console.error("Submission error:", error);
        this.setState({ error: "Failed to submit form. Please try again." });
        toast.error("Failed to submit form. Please try again.");
      }
    } else {
      form.reportValidity();
    }
  };

  submitAdmissionForm = async (data: FormData) => {
    try {
      const response = await axios.post(this.API_URL, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error submitting form:", error);
      throw error;
    }
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="container mx-auto my-8 max-w-3xl">
          <Card>
            <CardContent>
              <h2 className="text-2xl font-bold mb-6">
                MCA Admission Application
              </h2>
              <div className="mb-8">
                <div className="flex justify-between">
                  {steps.map((label, index) => (
                    <div key={label} className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          index <= this.state.activeStep
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span className="ml-2">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {this.state.activeStep === steps.length ? (
                <div className="text-center">
                  <p>Application submitted successfully!</p>
                </div>
              ) : (
                <form onSubmit={this.handleSubmit}>
                  {this.getStepContent(this.state.activeStep)}
                  <div className="flex justify-between mt-6">
                    <Button variant="destructive" onClick={this.handleCancel}>
                      Cancel
                    </Button>
                    <div className="space-x-2">
                      <Button
                        variant="outline"
                        disabled={this.state.activeStep === 0}
                        onClick={this.handleBack}
                      >
                        Back
                      </Button>
                      <Button
                        type={
                          this.state.activeStep === steps.length - 1
                            ? "submit"
                            : "button"
                        }
                        onClick={
                          this.state.activeStep === steps.length - 1
                            ? undefined
                            : this.handleNext
                        }
                      >
                        {this.state.activeStep === steps.length - 1
                          ? "Submit"
                          : "Next"}
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </>
    );
  }
}

export default AdmissionForm;
